#!/usr/bin/env node

import { readdir, readFile, writeFile, stat } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distEsmDir = join(__dirname, '../dist/esm');

// Regular expressions for searching imports and exports
const IMPORT_REGEX = /from\s+['"](\.[^'"]*?)['"];?/g;
const EXPORT_REGEX = /export\s+\*\s+from\s+['"](\.[^'"]*?)['"];?/g;

// Known directories in our project
const KNOWN_DIRECTORIES = ['components', 'utils', 'hooks', 'types'];

async function fileExists(path) {
  try {
    await stat(path);
    return true;
  } catch {
    return false;
  }
}

async function isDirectory(path) {
  try {
    const stats = await stat(path);
    return stats.isDirectory();
  } catch {
    return false;
  }
}

async function fixImportsInFile(filePath) {
  try {
    const content = await readFile(filePath, 'utf8');
    let modified = false;

    const fixPath = async (match, importPath) => {
      // Already has .mjs or .js extension
      if (importPath.endsWith('.mjs') || importPath.endsWith('.js')) {
        return match;
      }

      // Calculate absolute path
      const basePath = dirname(filePath);
      const resolvedPath = join(basePath, importPath);

      // Check if folder exists
      if (await isDirectory(resolvedPath)) {
        modified = true;
        return match.replace(importPath, `${importPath}/index.mjs`);
      }

      // Check if file .mjs exists
      if (await fileExists(`${resolvedPath}.mjs`)) {
        modified = true;
        return match.replace(importPath, `${importPath}.mjs`);
      }

      // Heuristic: if there is no dot, it's probably a folder
      if (!importPath.includes('.')) {
        // Check by known folders
        const pathParts = importPath.split('/');
        const lastPart = pathParts[pathParts.length - 1];
        if (KNOWN_DIRECTORIES.includes(lastPart)) {
          modified = true;
          return match.replace(importPath, `${importPath}/index.mjs`);
        }
      }

      // by default add .mjs
      modified = true;
      return match.replace(importPath, `${importPath}.mjs`);
    };

    // process imports
    let result = content;
    const importMatches = [...content.matchAll(IMPORT_REGEX)];
    for (const match of importMatches) {
      const newMatch = await fixPath(match[0], match[1]);
      if (newMatch !== match[0]) {
        result = result.replace(match[0], newMatch);
      }
    }

    // process exports
    const exportMatches = [...result.matchAll(EXPORT_REGEX)];
    for (const match of exportMatches) {
      const newMatch = await fixPath(match[0], match[1]);
      if (newMatch !== match[0]) {
        result = result.replace(match[0], newMatch);
      }
    }

    if (modified) {
      await writeFile(filePath, result);
      console.info(`✅ Fixed file: ${filePath}`);
    }

    return modified;
  } catch (error) {
    console.error(`❌ Error processing file ${filePath}:`, error.message);
    return false;
  }
}

async function processDirectory(dir) {
  try {
    const entries = await readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = join(dir, entry.name);

      if (entry.isDirectory()) {
        await processDirectory(fullPath);
      } else if (entry.name.endsWith('.mjs')) {
        await fixImportsInFile(fullPath);
      }
    }
  } catch (error) {
    console.error(`❌ Error processing directory ${dir}:`, error.message);
  }
}

async function main() {
  console.info('🔧 Starting to fix ESM imports...');

  if (!(await fileExists(distEsmDir))) {
    console.error(`❌ Directory ${distEsmDir} does not exist. Run build first.`);
    process.exit(1);
  }

  await processDirectory(distEsmDir);
  console.info('✅ ESM imports fixed!');
}

main().catch(console.error);
