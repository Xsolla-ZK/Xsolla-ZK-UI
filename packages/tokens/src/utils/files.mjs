import fse from 'fs-extra';
import { formatJS } from './formatter.mjs';
const { promises } = fse;

/**
 * @param {string} path
 * @returns {Promise<object>}
 */
export async function readJsonFile(path) {
  return JSON.parse(await promises.readFile(path, 'utf-8'));
}

/**
 * @param {string} path
 * @param {string} content
 */
export async function writeFile(path, content) {
  const ext = path.split('.').pop();
  fse.outputFile(path, await formatJS(content, ext === 'ts'));
}
