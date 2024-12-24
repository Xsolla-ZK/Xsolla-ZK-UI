/* eslint-disable max-lines */
import { register, transformDimension } from '@tokens-studio/sd-transforms';
import StyleDictionary from 'style-dictionary';
import { fileHeader } from 'style-dictionary/utils';
import fse from 'fs-extra';
import path from 'path';
import prettier from 'prettier';
import prettierConfig from '../../prettier.config.mjs';
const { promises } = fse;

const designTokensPath = 'design-tokens/tokens';
let globalGroup;

function getDesignTokensPath(filename, ext = 'json') {
  return `${designTokensPath}/${filename}.${ext}`;
}

function camelize(str) {
  if (/^[a-z][A-Za-z0-9]*$/.test(str)) return str;
  return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
}

function kebabize(str) {
  return str
    .split('')
    .map((letter, idx) =>
      letter.toUpperCase() === letter ? `${idx !== 0 ? '-' : ''}${letter.toLowerCase()}` : letter,
    )
    .join('');
}

function capitalizeFirstLetter(val) {
  return val.charAt(0).toUpperCase() + val.slice(1);
}

function isNumeric(str) {
  if (typeof str !== 'string') return false;
  return (
    !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
    !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
  );
}

function getRelativePath(from, to) {
  return path.relative(path.dirname(from), to);
}

function pickByDotNotation(obj, path) {
  return path.split('.').reduce((acc, key) => {
    if (acc && Object.hasOwn(acc, key)) {
      return acc[key];
    }
    return undefined;
  }, obj);
}

async function formatJS(content, ts) {
  return await prettier.format(content, {
    semi: prettierConfig.semi,
    singleQuote: prettierConfig.singleQuote,
    trailingComma: prettierConfig.trailingComma,
    parser: ts ? 'typescript' : 'babel',
  });
}

async function getGroupMap(metadata) {
  if (globalGroup) return globalGroup;
  const $themes = JSON.parse(await promises.readFile(getDesignTokensPath('$themes'), 'utf-8'));

  const groupMap = $themes.reduce((acc, curr) => {
    if (acc[curr.group]) {
      acc[curr.group].push(curr.name);
    } else {
      acc[curr.group] = [curr.name];
    }
    return acc;
  }, {});

  const pathsGroupData = metadata.tokenSetOrder.reduce(
    (acc, curr, _idx, data) => {
      let injected = false;
      const currPathParts = curr.split('/');
      const currKey = currPathParts.pop();

      for (const [group, names] of Object.entries(groupMap)) {
        const name = names.find((n) => curr.includes(n));
        if (!name && group === 'theme') {
          const refWithTheme = data.filter((path) => path.includes(currPathParts.join('/')));

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

async function createThemeFiles(metadata) {
  const { groupMap, pathsGroupData } = await getGroupMap(metadata);

  groupMap.theme.forEach(async (theme) => {
    // const commonImports = injectImportGroup(pathsGroupData.common, 'common');
    const currentThemeImports = injectImportGroup(pathsGroupData[`theme_${theme}`], theme);
    const layoutImports = injectImportGroup(pathsGroupData.layout, theme);

    const base = [Object.keys(pathsGroupData[`theme_${theme}`])]
      .flat()
      .map((item) => camelize(item))
      .join(',\n');
    const breakpoints = Object.keys(pathsGroupData.layout)
      .map((item) => camelize(item))
      .join(',\n');

    const name = `tokens${capitalizeFirstLetter(theme)}`;

    const content = `
      // theme
      ${currentThemeImports}
      // semantic
      ${layoutImports}

      const ${name} = {
        ${base},
        breakpoints: {
          ${breakpoints},
        },
      };

      export default ${name};
    `;

    fse.outputFile(`${getBuildPath()}/${theme}.js`, await formatJS(content));
  });

  const themeContent = `
    ${groupMap.theme.map((theme) => `import ${theme} from './${theme}';`).join('\n')}

    const tokensThemes = {
      ${groupMap.theme.join(',\n')}
    };

    export default tokensThemes;
  `;

  const commonContent = `
    ${Object.keys(pathsGroupData.common)
      .map((name) => `import ${name} from './${name}';`)
      .join('\n')}

    const tokensCommon = {
      ${Object.keys(pathsGroupData.common).join(',\n')}
    };

    export default tokensCommon;
  `;

  fse.outputFile(`${getBuildPath()}/themes.js`, await formatJS(themeContent));
  fse.outputFile(`${getBuildPath()}/common/index.js`, await formatJS(commonContent));
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

  return {
    source: selectedData.map((path) => getDesignTokensPath(path)),
    // log: {
    //   warnings: 'warn',
    //   verbosity: 'default',
    //   errors: {
    //     brokenReferences: 'console',
    //   },
    // },
    preprocessors: ['tokens-studio'],
    platforms: {
      js: {
        transformGroup: 'tokens-studio',
        transforms: ['ts/resolveMath', 'dimension/size/px'],
        buildPath: `${getBuildPath()}/${buildPathKey}/`,
        files: Object.keys(files).map((key) => ({
          destination: `${key}.js`,
          format: 'js/object/prettier',
          options: {
            categorySelector: files[key],
            categorySelectorKey: key,
          },
        })),
      },
    },
  };
}

/** @param {import('style-dictionary').TransformedToken} token */
/** @param {import('style-dictionary').Config} options */
function compileTokenValue(token, options) {
  const { usesDtcg } = options;
  let value = `${usesDtcg ? token.$value : token.value}`;
  // const originalValue = `${usesDtcg ? token.original.$value : token.original.value}`;

  return isNumeric(value) ? value : `${value}`;
}

function arrayToNestedObject(arr, options) {
  const result = {};

  arr.forEach((token) => {
    const path = options.categorySelectorKey
      ? token.path.filter((value) => value !== options.categorySelectorKey)
      : token.path;

    const value = `${compileTokenValue(token, options)}${token.comment ? ` // ${token.comment}` : ''}`;

    path.reduce(
      (acc, curr, index) => (acc[curr] ??= index === path.length - 1 ? value : {}),
      result,
    );
  });

  return result;
}

function getBuildPath() {
  const args = process.argv.slice(2);
  if (args.includes('--react')) {
    return './packages/react/src/tokens';
  }

  return './tokens';
}

async function run() {
  const $metadata = JSON.parse(await promises.readFile(getDesignTokensPath('$metadata'), 'utf-8'));
  const { groupMap, pathsGroupData } = await getGroupMap($metadata);

  const configs = [configJSTemplate(pathsGroupData, 'common', 'common')];

  groupMap.theme.forEach((theme) => {
    const themeKey = `theme_${theme}`;

    configs.push(configJSTemplate(pathsGroupData, theme, ['common', themeKey]));

    groupMap.layout.forEach((layoutKey) => {
      configs.push(
        configJSTemplate(pathsGroupData, theme, ['common', themeKey, `layout.${layoutKey}`]),
      );
    });
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

StyleDictionary.registerFormat({
  name: `js/object/prettier`,
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

run();

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
