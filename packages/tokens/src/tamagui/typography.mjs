import generateSimpleFile from '../templates/simple.mjs';
import { writeToBuildDir } from '../utils/files.mjs';
import { flattenObject, withoutEmpty } from '../utils/helpers.mjs';
import { getValueByPath, getValueRecursively } from '../utils/values.mjs';
import { getFormatConfig } from '../utils/config.mjs';

const allowedKeys = {
  fontFamily: true,
  fontWeight: false,
  fontSize: true,
  lineHeight: true,
  letterSpacing: true,
};

const presetAllowedKeys = {
  paragraphSpacing: 'marginBottom',
};

const mappingValues = {
  fontFamily: 'category',
  fontWeight: 'variant',
  fontSize: 'size',
  lineHeight: 'size',
  paragraphSpacing: 'value',
};

/**
 * @param {string | number} value
 * @returns {string | number | null}
 */
function validateValue(value) {
  return typeof value === 'string' || value > 0 ? value : null;
}

function _presetTemplate(data, key, value, path) {
  if (mappingValues[key] === 'value') {
    const val = getValueByPath(data, value);
    return validateValue(val);
  }
  const val = validateValue(path[mappingValues[key]]);
  return val ? `$${val}` : null;
}

async function transformTypographyToFonts(rawData, sources) {
  const { separator = '/', flatten } = getFormatConfig();
  const fonts = {};
  const presets = {};

  Object.entries(rawData).forEach(([category, data]) => {
    if (category === 'typography') {
      const content = getValueRecursively(data, sources);
      const processedValue = withoutEmpty(content);
      const finalValue = flatten ? flattenObject(processedValue, separator) : processedValue;
      return writeToBuildDir('typography', generateSimpleFile(finalValue, 'typography'));
    }

    const result = {
      family: '',
      size: {},
      lineHeight: {},
      weight: {},
      letterSpacing: {},
    };

    Object.entries(data).forEach(([size, variants]) => {
      const variantData = variants.default.value;
      Object.keys(variantData).forEach((key) => {
        if (allowedKeys[key]) {
          const pickKey = key.startsWith('font') ? key.slice(4).toLowerCase() : key;
          const data = variantData[key];
          if (/{|}/g.test(data)) {
            const value = getValueByPath(sources, data);
            if (typeof result[pickKey] === 'string') {
              result[pickKey] = value;
            } else {
              result[pickKey] ??= { [size]: value };
              result[pickKey][size] = value;
            }
          }
        }
      });

      Object.entries(variants).forEach(([variant, data]) => {
        const variantData = data.value;
        const presetPath = [category, size, variant];
        const presetKey = presetPath.join(separator);
        presets[presetKey] ??= {};
        result.weight[variant] = getValueByPath(sources, variantData['fontWeight']).toString();

        Object.entries(presetAllowedKeys).forEach(([key, mappedKey]) => {
          const variantDataValue = variantData[key];
          if (variantDataValue) {
            const val = validateValue(getValueByPath(sources, variantDataValue));
            if (val) {
              presets[presetKey][mappedKey] = val;
            }
          }
        });

        // generate preset looks like this
        // 'category/size/variant': {
        //   fontFamily: '$category',
        //   fontWeight: '$variant',
        //   fontSize: '$size',
        //   lineHeight: '$size',
        // }
        // Object.keys(variantData).forEach((key) => {
        //   const presetPropKey = presetAllowedKeys[key] ?? key;
        //   const value = presetTemplate(rawData, key, variantData[key], {
        //     category,
        //     size,
        //     variant,
        //   });
        //   if (value) {
        //     presets[presetKey][presetPropKey] = value;
        //   }
        // });
      });
    });

    fonts[category] = withoutEmpty(result);
  });

  await writeToBuildDir('fonts', generateSimpleFile(fonts, 'fonts'));
  // await writeToBuildDir('presets', generatePresetsFile(presets, separator));
  // await writeToBuildDir('settings', generateTamaguiSettingsFile(Object.keys(fonts)[0] ?? 'body'));
}

export default transformTypographyToFonts;
