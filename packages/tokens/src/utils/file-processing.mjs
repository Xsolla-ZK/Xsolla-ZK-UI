import { writeToBuildDir } from './files.mjs';
import { camelize, withoutEmpty, flattenObject } from './helpers.mjs';
import { getFormatConfig } from './config.mjs';
import { getTransformGroup } from './transforms.mjs';

/**
 * @param {Record<string, Record<string, any>>} files
 * @param {string} groupTransform
 */
export async function processGroupFiles(files, groupTransform) {
  if (Object.keys(files[groupTransform] || {}).length === 0) return;

  const exports = [];
  const { separator, transformKey, flatten } = getFormatConfig();
  const transformGroupMap = getTransformGroup();
  const transformGroup = transformGroupMap[groupTransform];
  const currentFlatten = typeof transformGroup === 'object' ? transformGroup.flatten : flatten;

  const summaryKeys = Object.entries(files[groupTransform]).map(([key, value]) => {
    const transformedKey = transformKey(key);
    const processedValue = withoutEmpty(value);
    const finalValue = currentFlatten ? flattenObject(processedValue, separator) : processedValue;

    exports.push(
      `export const ${camelize(transformedKey)} = ${JSON.stringify(finalValue, null, 2)};`,
    );
    return camelize(transformedKey);
  });

  exports.push(`export const ${groupTransform} = { ${summaryKeys.join(',\n')}};`);

  const content = exports.join('\n');
  await writeToBuildDir(groupTransform, content);
}
