/* eslint-disable max-lines */
import { register, transformDimension } from '@tokens-studio/sd-transforms';
import StyleDictionary from 'style-dictionary';
import { fileHeader } from 'style-dictionary/utils';
import fse from 'fs-extra';
import { camelize, getArgValue, isNumeric } from './utils/helpers.mjs';
import { formatJS } from './utils/formatter.mjs';
import { getDesignTokensFile, getBuildPath } from './utils/helpers.mjs';
import { readJsonFile, writeFile } from './utils/files.mjs';
import { formatMap } from './utils/mappings.mjs';

let globalGroup;

const bannedGroups = ['semantic', 'figma-only'];
const whitelistGroup = {
  theme: true,
  platform: true,
};

/**
 * @param {Record<string, string>} selectedTokenSets
 * @param {{ group: string, name: string }} options
 * @returns {{ input: Record<string, string>, source: Record<string, string> }}
 */
function getSelectedTokenSets(selectedTokenSets, { name }) {
  return Object.entries(selectedTokenSets).reduce(
    (acc, [key, value]) => {
      const pathParts = key.split('/');
      const fileKey = pathParts.pop();
      const currentKey = fileKey === name ? pathParts.pop() : fileKey;

      if (value === 'source') {
        acc.source[currentKey] = key;
      }
      if (value === 'enabled') {
        acc.input[currentKey] = key;
        acc.source[currentKey] = key;
      }

      return acc;
    },
    { input: {}, source: {} },
  );
}

/**
 * @param {{ tokenSetOrder: string[] }} metadata
 * @returns {{ groupMap: Record<string, string[]>, pathsGroupData: Record<string, { input: Record<string, string>, source: Record<string, string> }> }}
 */
async function getGroupMap(metadata) {
  if (globalGroup) return globalGroup;
  const $themes = await readJsonFile(getDesignTokensFile('$themes'));

  const groupMap = {};
  const used = new Set(bannedGroups);

  const groupData = $themes.reduce((acc, { group, name, selectedTokenSets }) => {
    if (whitelistGroup[group]) {
      const key = `${group}/${name}`;
      const selectedTokens = getSelectedTokenSets(selectedTokenSets, { group, name });

      if (!acc[key]) {
        acc[key] = { input: {}, source: {} };
      }

      Object.keys(selectedTokens).forEach((token) => {
        Object.assign(acc[key][token], selectedTokens[token]);
      });

      Object.keys(selectedTokens.input).forEach((token) => used.add(token));

      if (groupMap[group]) {
        groupMap[group].push(name);
      } else {
        groupMap[group] = [name];
      }
    }

    return acc;
  }, {});

  const commonRaw = metadata.tokenSetOrder.filter(
    (item) => !Array.from(used).some((group) => item.includes(group)),
  );

  const common = commonRaw.reduce(
    (acc, curr) => {
      const key = curr.split('/').pop();
      acc.input[key] = curr;
      acc.source[key] = curr;

      if (groupMap.common) {
        groupMap.common.push(key);
      } else {
        groupMap.common = [key];
      }
      return acc;
    },
    { input: {}, source: {} },
  );

  globalGroup = {
    groupMap,
    pathsGroupData: {
      ...groupData,
      common,
    },
  };

  return globalGroup;
}

/**
 * @param {{ Record<string, string> }} data
 * @param {string} path
 * @returns {string}
 */
function injectImportGroup(data, path) {
  return Object.keys(data)
    .map((key) => `import ${camelize(key)} from './${path}/${key}';`)
    .join('\n');
}

/**
 * @param {string[]} data
 * @param {string} name
 * @returns {string}
 */
function getSimpleContent(data, name) {
  const base = data.map((item) => {
    const res = camelize(item);
    return res;
  });

  const formattedName = camelize(name);

  return `
    ${data.map((name) => `import ${camelize(name)} from './${name}';`).join('\n')}

    const ${formattedName} = {
      ${base.join(',\n')}
    };

    export default ${formattedName};
  `;
}

/**
 * @param {{ tokenSetOrder: string[] }} metadata
 * @returns {Promise<void>}
 */
async function createCollectionFiles(metadata) {
  const { groupMap, pathsGroupData } = await getGroupMap(metadata);

  Object.entries(groupMap).forEach(([group, names]) => {
    const groupContent = getSimpleContent(names, group);

    writeFile(`${getBuildPath()}/${group}/index.js`, groupContent);
    names.forEach((name) => {
      const groupData = pathsGroupData[`${group}/${name}`];
      if (groupData) {
        const groupByName = getSimpleContent(Object.keys(groupData.input), name);

        writeFile(`${getBuildPath()}/${group}/${name}/index.js`, groupByName);
      }
    });
  });
}

function getPlatformTemplate(files, { buildPathKey }) {
  // console.log(files, buildPathKey);
  const { transforms, format, extension } = getFormatConfig();
  const buildPath = buildPathKey.split('/');
  const groupName = buildPath[0];

  const filesCompiler = getFormatConfig()?.groupFilesCompiler[groupName];

  const currentFormat = filesCompiler?.format ?? format;

  const groupSelector = buildPath[Number(buildPath.length > 1)];

  console.log(groupName);
  // console.log(options.groupName, options.buildKeyPath, options.groupSelector, options.groupVariant);
  // platform, platform/web, common/media/web, media

  return {
    transformGroup: 'tokens-studio',
    transforms,
    buildPath: `${getBuildPath()}/${filesCompiler === 'singleton' ? groupName : buildPathKey}/`,
    files:
      filesCompiler === 'singleton'
        ? [
            {
              destination: `${groupSelector}.${extension}`,
              format: currentFormat,
              filter: 'not-figma',
              options: {
                groupName,
                groupSelector,
                groupVariant: '',
                buildKeyPath: buildPathKey,
              },
            },
          ]
        : Object.keys(files)
            .filter((file) => getFormatConfig().groupVariantFilesCompiler?.[file] !== 'manual')
            .map((variant) => ({
              destination: `${variant}.${extension}`,
              format: currentFormat,
              filter: 'not-figma',
              options: {
                groupName,
                groupSelector: files[variant],
                groupVariant: variant,
                buildKeyPath: buildPathKey,
              },
            })),
  };
}

function getFormatConfig() {
  return formatMap[getArgValue('format')];
}

function configJSTemplate(data, pathKey) {
  const buildPathKey = pathKey;
  const selectedData = Object.values(data.source);
  if (!selectedData.length) return;

  const files = data.input;

  let platformTemplate = getPlatformTemplate(files, {
    buildPathKey,
  });

  return /** @type {import('style-dictionary').Config} */ ({
    source: selectedData.map((path) => getDesignTokensFile(path)),
    preprocessors: ['tokens-studio'],
    platforms: {
      [getFormatConfig().platform]: platformTemplate,
    },
    // log: {
    //   warnings: 'warn',
    //   verbosity: 'verbose',
    //   errors: {
    //     brokenReferences: 'console',
    //   },
    // },
  });
}

/**
 * @param {import('style-dictionary').TransformedToken} token
 * @param {import('style-dictionary').Config} options
 */
function compileTokenValue(token, options) {
  const { usesDtcg } = options;
  const value = usesDtcg ? token.$value : token.value;

  // const originalValue = `${usesDtcg ? token.original.$value : token.original.value}`;

  return isNumeric(value) ? value : `${value}`;
}

/**
 * @param {import('style-dictionary').TransformedToken[]} arr
 * @param {import('style-dictionary').Config} options
 */
function arrayToNestedObject(arr, options) {
  const result = {};

  arr.forEach((token) => {
    const path = options.groupVariant
      ? token.path.filter((value) => value !== options.groupVariant)
      : token.path;

    const value = compileTokenValue(token, options); // ${token.comment ? ` // ${token.comment}` : ''}

    path.reduce(
      (acc, curr, index) => (acc[camelize(curr)] ??= index === path.length - 1 ? value : {}),
      result,
    );
  });

  return result;
}

async function run() {
  const $metadata = await readJsonFile(getDesignTokensFile('$metadata'));
  const { pathsGroupData } = await getGroupMap($metadata);

  const configs = [];

  Object.entries(pathsGroupData).forEach(([key, value]) => {
    configs.push(configJSTemplate(value, key));
  });

  async function cleanAndBuild(cfg) {
    const sd = new StyleDictionary(cfg);
    await fse.remove(getBuildPath());
    // await sd.cleanAllPlatforms();
    await sd.buildAllPlatforms();
  }

  await Promise.all(configs.map(cleanAndBuild));
  await createCollectionFiles($metadata);
}

// sd-transforms, 2nd parameter for options can be added
// See docs: https://github.com/tokens-studio/sd-transforms
register(StyleDictionary);

StyleDictionary.registerTransform({
  name: 'dimension/size/px',
  type: 'value',
  transitive: true,
  // filter: (token) => ['fontSizes', 'dimension', 'borderRadius', 'spacing'].includes(token.type),
  filter: (token) => token.type === 'number' && token.attributes.type !== 'font-weight',
  transform: (token) => transformDimension(token),
});

StyleDictionary.registerTransform({
  name: 'numeric/value',
  type: 'value',
  transitive: true,
  filter: (token) => ['opacity', 'number'].includes(token.type),
  transform: (token) => token.value,
});

StyleDictionary.registerFilter({
  name: 'not-figma',
  filter: (token) =>
    !(
      token.filePath.startsWith('figma-only') ||
      token.comment === 'figma-only' ||
      token.description === 'figma-only'
    ),
});

StyleDictionary.registerFormat({
  name: `js/nestedObject/prettier`,
  format: async function ({ dictionary, _platform, options, file }) {
    const selectedTokens = dictionary.allTokens.filter((token) =>
      token.filePath.includes(options.groupSelector),
    );

    const header = await fileHeader({ file, options });
    const content = [
      header,
      'export default',
      JSON.stringify(arrayToNestedObject(selectedTokens, options)),
    ]
      .flat()
      .join('\n');

    return await formatJS(content);
  },
});

StyleDictionary.registerFormat({
  name: `js/themeFlat/prettier`,
  format: async function ({ dictionary, _platform, options, file }) {
    const selectedTokens = dictionary.allTokens.filter((token) =>
      token.filePath.includes(options.groupSelector),
    );

    const header = await fileHeader({ file, options });
    const content = [
      header,
      'export default',
      JSON.stringify(
        selectedTokens.reduce((acc, curr) => {
          const path = options.groupVariant
            ? curr.path.filter((value) => value !== options.groupVariant)
            : curr.path;

          console.log(
            options.groupName,
            options.buildKeyPath,
            options.groupSelector,
            options.groupVariant,
          );
          // platform, platform/web, common/media/web, media

          const key = path.join('/');
          // const completeKey =
          //   options.buildKeyPath !== 'layout' && options.buildKeyPath !== 'common' // && options.groupVariant !== 'theme'
          //     ? `${options.groupVariant}/${key}`
          //     : key;

          // console.log(options.groupSelector);

          // const completeKey =
          //   options.buildKeyPath.includes('theme') && options.groupVariant !== 'theme'
          //     ? `${options.groupVariant}/${key}`
          //     : key;
          const completeKey = key;

          acc[completeKey] =
            curr.type === 'number' || curr.type === 'opacity' ? Number(curr.value) : curr.value;

          return acc;
        }, {}),
      ),
    ]
      .flat()
      .join('\n');

    return await formatJS(content);
  },
});

export default run;
