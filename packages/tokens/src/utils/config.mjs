import { createFormat, transformKeyFromMap, transformGroupKey } from './format.mjs';
import { getArgValue } from './helpers.mjs';

export const formatMap = {
  object: createFormat(),
  tamagui: createFormat({
    transformKey: transformKeyFromMap,
    transformGroupKey,
    extension: 'ts',
    flatten: true,
  }),
};

/**
 * @typedef {Object} FormatConfig
 * @property {string} extension - File extension (e.g. 'js', 'ts', 'mjs')
 * @property {string} [separator] - Separator for flattened object keys
 * @property {boolean} [flatten] - Whether to flatten nested objects
 * @property {(key: string) => string} transformKey - Function to transform object keys
 * @property {(key: string) => string} transformGroupKey - Function to transform group keys
 */

/**
 * @returns {FormatConfig}
 */
export function getFormatConfig() {
  return formatMap[getArgValue('format')];
}
