/* eslint-disable max-lines */
import { register, transformDimension } from '@tokens-studio/sd-transforms';
import StyleDictionary from 'style-dictionary';
import { fileHeader } from 'style-dictionary/utils';
import fse from 'fs-extra';
import {
  camelize,
  capitalizeFirstLetter,
  getArgValue,
  pickByDotNotation,
  isNumeric,
} from './utils/helpers.mjs';
import { formatJS } from './utils/formatter.mjs';
import { getDesignTokensFile, getBuildPath } from './utils/helpers.mjs';
import { readJsonFile, writeFile } from './utils/files.mjs';

let globalGroup;

const bannedGroups = ['product', 'platform', 'skeleton'];

async function getGroupMap(metadata) {
  if (globalGroup) return globalGroup;
  const $themes = await readJsonFile(getDesignTokensFile('$themes'));

  const groupMap = $themes.reduce((acc, curr) => {
    if (!bannedGroups.includes(curr.group)) {
      if (acc[curr.group]) {
        acc[curr.group].push(curr.name);
      } else {
        acc[curr.group] = [curr.name];
      }
    }
    return acc;
  }, {});

  const pathsGroupData = metadata.tokenSetOrder.filter((item) => !bannedGroups.some((group) => item.includes(group))).reduce(
    (acc, curr, _idx, data) => {
      let injected = false;
      const currPathParts = curr.split('/');
      const currKey = currPathParts.pop();

      for (const [group, names] of Object.entries(groupMap)) {
        const name = names.find((n) => curr.includes(n));
        if (!name && group === 'theme') {
          const refWithTheme = data.filter((path) => path.includes(currPathParts.join('/')));

          console.log(refWithTheme, currPathParts)

          if (refWithTheme.length > names.length) {
            names.forEach((name) => {
              const mainKey = group + '_' + name;
              acc[mainKey] ??= { [currKey]: curr };
              acc[mainKey][currKey] = curr;
            });
            injected = true;
            break;
          }
          continue;
        }

        if (name) {
          const mainKey = group === 'theme' ? group + '_' + name : group;
          const key = group === 'theme' ? curr.replace(`/${name}`, '').split('/').pop() : name;

          acc[mainKey] ??= { [key]: curr };
          acc[mainKey][key] = curr;

          injected = true;
          break;
        }
      }

      if (!injected) {
        acc.common[currKey] = curr;
      }

      return acc;
    },
    { common: {} },
  );

  globalGroup = {
    groupMap,
    pathsGroupData,
  };

  return globalGroup;
}

function injectImportGroup(data, path) {
  return Object.keys(data)
    .map((key) => `import ${camelize(key)} from './${path}/${key}';`)
    .join('\n');
}

function getSimpleContent(data, name) {
  return `
    ${Object.keys(data)
      .map((name) => `import ${camelize(name)} from './${name}';`)
      .join('\n')}

    const ${name} = {
      ${Object.keys(data)
        .map((name) => camelize(name))
        .join(',\n')}
    };

    export default ${name};
  `;
}

async function createThemeFiles(metadata) {
  const { groupMap, pathsGroupData } = await getGroupMap(metadata);

  groupMap.theme.forEach(async (theme) => {
    const currentThemeImports = injectImportGroup(pathsGroupData[`theme_${theme}`], theme);

    const base = [Object.keys(pathsGroupData[`theme_${theme}`])].flat().map((item) => {
      const res = camelize(item);
      return getArgValue('tamagui') ? `...${res}` : res;
    });

    const name = `tokens${capitalizeFirstLetter(theme)}`;

    const content = `
      ${currentThemeImports}

      const ${name} = {
        ${base.join(',\n')}
      };

      export default ${name};
    `;

    writeFile(`${getBuildPath()}/${theme}.js`, content);
  });

  const themeContent = `
    ${groupMap.theme.map((themeMode) => `import ${themeMode} from './${themeMode}';`).join('\n')}

    const tokensThemes = {
      ${groupMap.theme.join(',\n')}
    };

    export default tokensThemes;
  `;

  const commonContent = getSimpleContent(pathsGroupData.common, 'tokensCommon');
  // const layoutContent = getSimpleContent(pathsGroupData.layout, 'tokensLayout');

  writeFile(`${getBuildPath()}/themes.js`, themeContent);
  writeFile(`${getBuildPath()}/common/index.js`, commonContent);
  // fse.outputFile(`${getBuildPath()}/layout/index.js`, await formatJS(layoutContent));
}

function getPlatformTemplate(files, { transforms, buildPathKey, format }) {
  return {
    transformGroup: 'tokens-studio',
    transforms,
    buildPath: `${getBuildPath()}/${buildPathKey}/`,
    files: Object.keys(files).map((key) => ({
      destination: `${key}.js`,
      format,
      filter: 'not-figma',
      options: {
        categorySelector: files[key],
        categorySelectorKey: key,
        buildKeyPath: buildPathKey,
      },
    })),
  };
}

function configJSTemplate(data, buildPathKey, buildGroup) {
  const selectedData = Array.isArray(buildGroup)
    ? buildGroup
        .map((key) => {
          const picked = pickByDotNotation(data, key);
          return typeof picked === 'string' ? picked : Object.values(picked);
        })
        .flat()
    : Object.values(data[buildGroup]);
  if (!selectedData.length) return;

  const key = Array.isArray(buildGroup) ? buildGroup[buildGroup.length - 1] : buildGroup;
  const pickedFiles = pickByDotNotation(data, key);
  const files =
    typeof pickedFiles === 'string'
      ? { [key.includes('.') ? key.split('.').slice(1).join() : key]: pickedFiles }
      : pickedFiles;

  let platformTemplate = getPlatformTemplate(files, {
    buildPathKey,
    transforms: ['ts/resolveMath', 'dimension/size/px'],
    format: 'js/nestedObject/prettier',
  });

  if (getArgValue('tamagui')) {
    platformTemplate = getPlatformTemplate(files, {
      buildPathKey,
      transforms: ['ts/resolveMath', 'numeric/value'],
      format: 'js/themeFlat/prettier',
    });
  }

  return {
    source: selectedData.map((path) => getDesignTokensFile(path)),
    // log: {
    //   warnings: 'warn',
    //   verbosity: 'default',
    //   errors: {
    //     brokenReferences: 'console',
    //   },
    // },
    preprocessors: ['tokens-studio'],
    platforms: {
      js: platformTemplate,
    },
  };
}

/** @param {import('style-dictionary').TransformedToken} token */
/** @param {import('style-dictionary').Config} options */
function compileTokenValue(token, options) {
  const { usesDtcg } = options;
  const value = usesDtcg ? token.$value : token.value;

  // const originalValue = `${usesDtcg ? token.original.$value : token.original.value}`;

  return isNumeric(value) ? value : `${value}`;
}

function arrayToNestedObject(arr, options) {
  const result = {};

  arr.forEach((token) => {
    const path = options.categorySelectorKey
      ? token.path.filter((value) => value !== options.categorySelectorKey)
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
  const { groupMap, pathsGroupData } = await getGroupMap($metadata);

  const configs = [configJSTemplate(pathsGroupData, 'common', 'common')];

  // groupMap.layout.forEach((layoutKey) => {
  //   configs.push(configJSTemplate(pathsGroupData, 'layout', ['common', `layout.${layoutKey}`]));
  // });

  groupMap.theme.forEach((theme) => {
    const themeKey = `theme_${theme}`;

    configs.push(configJSTemplate(pathsGroupData, theme, ['common', themeKey]));
  });

  async function cleanAndBuild(cfg) {
    const sd = new StyleDictionary(cfg);
    await fse.remove(getBuildPath());
    // await sd.cleanAllPlatforms();
    await sd.buildAllPlatforms();
  }

  await Promise.all(configs.map(cleanAndBuild));
  await createThemeFiles($metadata);
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
  filter: (token) => token.comment !== 'figma-only',
});


StyleDictionary.registerFormat({
  name: `js/nestedObject/prettier`,
  format: async function ({ dictionary, _platform, options, file }) {
    const selectedTokens = dictionary.allTokens.filter((token) =>
      token.filePath.includes(options.categorySelector),
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
      token.filePath.includes(options.categorySelector),
    );

    const header = await fileHeader({ file, options });
    const content = [
      header,
      'export default',
      JSON.stringify(
        selectedTokens.reduce((acc, curr) => {
          const path = options.categorySelectorKey
            ? curr.path.filter((value) => value !== options.categorySelectorKey)
            : curr.path;

          const key = path.join('/');
          const completeKey =
            options.buildKeyPath !== 'layout' && options.buildKeyPath !== 'common' // && options.categorySelectorKey !== 'theme'
              ? `${options.categorySelectorKey}/${key}`
              : key;

          acc[completeKey] = curr.type === 'number' ? Number(curr.value) : curr.value;

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

// css: {
//   transformGroup: 'tokens-studio',
//   transforms: [
//     'name/kebab'
//   ],
//   buildPath: 'tokens/css/',
//   files: [
//     {
//       destination: `_${name}.css`,
//       format: 'css/variables'
//     },
//     {
//       destination: `_${name}.scss`,
//       format: 'scss/variables'
//     }
//   ]
// },
