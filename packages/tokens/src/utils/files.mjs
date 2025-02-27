import fse from 'fs-extra';
import { formatJS } from './formatter.mjs';
import path from 'path';
import { GENERATED_FILES_PATH, GENERATED_FILES_VALIDITY_PERIOD_MS } from './constants.mjs';
import { getBuildPath } from './helpers.mjs';
import { getFormatConfig } from './config.mjs';
import generateFileHeader from '../templates/header.mjs';
const { promises } = fse;

// Local storage for the current session
let currentSessionFiles = null;

/**
 * Checks the validity of the timestamp
 * @param {number} timestamp - Timestamp in milliseconds
 * @returns {boolean}
 */
function isValidTimestamp(timestamp) {
  const now = Date.now();
  return now - timestamp < GENERATED_FILES_VALIDITY_PERIOD_MS;
}

/**
 * Collects all unique directories from the list of files
 * @param {Set<string>} files - List of files
 * @param {string} rootDir - Root directory
 * @returns {Set<string>} - List of directories
 */
function collectDirectories(files, rootDir) {
  const directories = new Set();
  for (const filePath of files) {
    let dir = path.dirname(filePath);
    while (dir.startsWith(rootDir) && dir !== rootDir) {
      directories.add(dir);
      dir = path.dirname(dir);
    }
  }
  return directories;
}

/**
 * Checks if the directory is empty
 * @param {string} dir - Path to the directory
 * @returns {Promise<boolean>}
 */
async function isDirectoryEmpty(dir) {
  try {
    const files = await fse.readdir(dir);
    return files.length === 0;
  } catch {
    return true;
  }
}

/**
 * Cleans empty directories
 * @param {Set<string>} directories - List of directories to check
 * @returns {Promise<number>} - Number of removed directories
 */
async function cleanEmptyDirectories(directories) {
  let removedCount = 0;
  const sortedDirs = Array.from(directories).sort((a, b) => b.length - a.length);

  for (const dir of sortedDirs) {
    try {
      if (await isDirectoryEmpty(dir)) {
        await fse.remove(dir);
        removedCount++;
      }
    } catch (error) {
      console.error(`Error removing directory ${dir}:`, error);
    }
  }

  return removedCount;
}

/**
 * Initializes local storage from a file or creates a new one
 * @returns {Promise<void>}
 */
async function initializeStorage() {
  if (currentSessionFiles !== null) {
    return;
  }

  try {
    if (await fse.pathExists(GENERATED_FILES_PATH)) {
      const data = await readJsonFile(GENERATED_FILES_PATH);

      if (
        data &&
        typeof data === 'object' &&
        Array.isArray(data.files) &&
        typeof data.timestamp === 'number' &&
        isValidTimestamp(data.timestamp)
      ) {
        currentSessionFiles = new Set(data.files);
        return;
      }
    }
  } catch (error) {
    console.error('Error initializing storage:', error);
  }

  currentSessionFiles = new Set();
}

/**
 * Saves the current state to a file
 * @returns {Promise<void>}
 */
async function persistStorage() {
  if (currentSessionFiles === null) {
    return;
  }

  try {
    const data = {
      timestamp: Date.now(),
      files: Array.from(currentSessionFiles).sort(),
    };

    await fse.outputJson(GENERATED_FILES_PATH, data, { spaces: 2 });
  } catch (error) {
    console.error('Error saving state:', error);
  }
}

/**
 * @param {string} path
 * @returns {Promise<object>}
 */
export async function readJsonFile(path) {
  return JSON.parse(await promises.readFile(path, 'utf-8'));
}

/**
 * Writes a file to the build directory and tracks it in the current session
 * @param {string|string[]} filePath - Path or path segments relative to build directory
 * @param {string} content - File content
 */
export async function writeToBuildDir(filePath, content) {
  await initializeStorage();

  const buildPath = getBuildPath();
  const { extension = 'js' } = getFormatConfig();

  const segments = Array.isArray(filePath) ? filePath : [filePath];
  const fileNameWithoutExt = segments.pop().replace(/\.[^/.]+$/, '');
  const relativePath = [
    ...(segments.length ? segments : []),
    `${fileNameWithoutExt}.${extension}`,
  ].join(path.sep);

  const absolutePath = path.join(buildPath, relativePath);
  const contentWithHeader = generateFileHeader() + content;

  await fse.outputFile(absolutePath, await formatJS(contentWithHeader, extension === 'ts'));
  currentSessionFiles.add(absolutePath);
}

/**
 * Cleans all generated files and empty directories
 * @returns {Promise<{files: number, directories: number}>} - Number of removed files and directories
 */
export async function cleanGeneratedFiles() {
  await initializeStorage();

  const buildPath = getBuildPath();
  let removedFiles = 0;

  // Remove files
  for (const filePath of currentSessionFiles) {
    try {
      if (await fse.pathExists(filePath)) {
        await fse.remove(filePath);
        removedFiles++;
      }
    } catch (error) {
      console.error(`Error removing file ${filePath}:`, error);
    }
  }

  // Collect and clean empty directories
  const directories = collectDirectories(currentSessionFiles, buildPath);
  const removedDirs = await cleanEmptyDirectories(directories);

  // Clean local storage after removing files
  currentSessionFiles = new Set();
  currentSessionFiles = null;

  return {
    files: removedFiles,
    directories: removedDirs,
  };
}

/**
 * Saves the current state before finishing the work
 */
export async function finalizeGeneration() {
  await persistStorage();
}
