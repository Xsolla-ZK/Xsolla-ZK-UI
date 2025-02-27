import { getArgValue } from './helpers.mjs';
import { formatMap } from './mappings.mjs';

/**
 * @typedef {Object} FormatConfig
 * @property {string} extension - File extension (e.g. 'js', 'ts', 'mjs')
 * @property {string} [separator] - Separator for flattened object keys
 * @property {boolean} [flatten] - Whether to flatten nested objects
 * @property {(key: string) => string} transformKey - Function to transform object keys
 * @property {(key: string) => string} transformGroupKey - Function to transform group keys
 * @property {Object} [transformMap] - Map of transform functions
 */

/**
 * @returns {FormatConfig}
 */
export function getFormatConfig() {
  return formatMap[getArgValue('format')];
}
