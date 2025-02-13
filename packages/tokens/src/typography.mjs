import { getDesignTokensFile, getBuildPath } from './utils/helpers.mjs';
import generatePresetsFile from './templates/presets.mjs';
import { withoutEmpty } from './utils/helpers.mjs';
import { readJsonFile, writeFile } from './utils/files.mjs';
import generateSimpleFile from './templates/simple.mjs';

const getValueByPath = (obj, path) => {
  const o = obj;
  const result = path
    .replace(/{|}/g, '')
    .split('.')
    .reduce((acc, key) => (acc ? acc[key] : undefined), o);
  return result;
};

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

function validateValue(value) {
  return typeof value === 'string' || value > 0 ? value : null;
}

function _presetTemplate(data, key, value, path) {
  if (mappingValues[key] === 'value') {
    const val = getValueByPath(data, value).value;
    return validateValue(val);
  }
  const val = validateValue(path[mappingValues[key]]);
  return val ? `$${val}` : null;
}

async function transformTypographyToFonts() {
  const typographyJson = await readJsonFile(getDesignTokensFile('common/typography/typography'));

  const fonts = {};
  const presets = {};

  Object.entries(typographyJson).forEach(([category, data]) => {
    if (category === 'typography') return;

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
            const value = getValueByPath(typographyJson, data).value;
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
        const presetKey = presetPath.join('/');
        presets[presetKey] ??= {};
        result.weight[variant] = getValueByPath(typographyJson, variantData['fontWeight']).value;

        Object.entries(presetAllowedKeys).forEach(([key, mappedKey]) => {
          const variantDataValue = variantData[key];
          if (variantDataValue) {
            const val = validateValue(getValueByPath(typographyJson, variantDataValue).value);
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
        //   const value = presetTemplate(typographyJson, key, variantData[key], {
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

  writeFile(`${getBuildPath()}/fonts.js`, generateSimpleFile(fonts, 'fonts'));
  writeFile(`${getBuildPath()}/presets.ts`, generatePresetsFile(presets));
}

export default transformTypographyToFonts;
