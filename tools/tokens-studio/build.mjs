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
    (acc, curr) => {
      let injected = false;

      for (const [group, names] of Object.entries(groupMap)) {
        const name = names.find((n) => curr.includes(n));
        if (!name) continue;

        const mainKey = group === 'theme' ? group + '_' + name : group;
        const key = group === 'theme' ? curr.replace(`/${name}`, '').split('/').pop() : name;

        acc[mainKey] ??= { [key]: curr };
        acc[mainKey][key] = curr;

        injected = true;
        break;
      }

      if (!injected) {
        const key = curr.split('/').pop();
        acc.common[key] = curr;
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

function injectImportGroup(data, theme) {
  return Object.keys(data)
    .map((key) => `import ${camelize(key)} from './${theme}/${key}';`)
    .join('\n');
}

async function createThemeFiles(metadata) {
  const { groupMap, pathsGroupData } = await getGroupMap(metadata);

  groupMap.theme.forEach(async (theme) => {
    const commonImports = injectImportGroup(pathsGroupData.common, theme);
    const currentThemeImports = injectImportGroup(pathsGroupData[`theme_${theme}`], theme);
    const layoutImports = injectImportGroup(pathsGroupData.layout, theme);

    const base = [Object.keys(pathsGroupData.common), Object.keys(pathsGroupData[`theme_${theme}`])]
      .flat()
      .map((item) => camelize(item))
      .join(',\n');
    const breakpoints = Object.keys(pathsGroupData.layout)
      .map((item) => camelize(item))
      .join(',\n');

    const name = `tokens${capitalizeFirstLetter(theme)}`;

    const content = `
      // common
      ${commonImports}
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

    fse.outputFile(`./tokens/js/${theme}.ts`, await formatJS(content, true));
  });

  const themeContent = `
    ${groupMap.theme.map((theme) => `import ${theme} from './${theme}';`).join('\n')}

    const tokensThemes = {
      ${groupMap.theme.join(',\n')}
    };

    export type XZKUITheme = typeof tokensThemes['dark'];
    export type XZKUIThemesUnion = keyof typeof tokensThemes;

    export default tokensThemes;
  `;

  fse.outputFile('./tokens/js/themes.ts', await formatJS(themeContent, true));
}

async function run() {
  const $metadata = JSON.parse(await promises.readFile(getDesignTokensPath('$metadata'), 'utf-8'));
  const { groupMap, pathsGroupData } = await getGroupMap($metadata);

  const configs = groupMap.theme.reduce((acc, theme) => {
    const themeKey = `theme_${theme}`;
    groupMap.layout.forEach((layoutKey) => {
      const data = {
        files: [
          Object.keys(pathsGroupData.common),
          Object.keys(pathsGroupData[themeKey]),
          layoutKey,
        ].flat(),
        source: [
          Object.values(pathsGroupData.common),
          Object.values(pathsGroupData[themeKey]),
          pathsGroupData.layout[layoutKey],
        ].flat(),
      };

      acc.push({
        source: data.source.map((path) => getDesignTokensPath(path)),
        log: {
          warnings: 'warn',
          verbosity: 'default',
          errors: {
            brokenReferences: 'console',
          },
        },
        preprocessors: ['tokens-studio'],
        platforms: {
          js: {
            transformGroup: 'tokens-studio',
            transforms: [
              'ts/resolveMath',
              'dimension/size/px',
              // 'ts/size/px',
              // 'ts/opacity',
              // 'ts/size/lineheight',
              // 'ts/typography/fontWeight',
              // 'ts/size/css/letterspacing',
            ],
            buildPath: `tokens/js/${theme}/`,
            files: data.files.map((path, idx) => ({
              destination: `${path}.js`,
              format: 'js/object/prettier',
              options: {
                categorySelector: data.source[idx],
              },
            })),
          },
        },
      });
    });
    return acc;
  }, []);

  async function cleanAndBuild(cfg) {
    const sd = new StyleDictionary(cfg);
    await sd.cleanAllPlatforms();
    await sd.buildAllPlatforms();
  }

  await Promise.all(configs.map(cleanAndBuild));
  await createThemeFiles($metadata);
}

// sd-transforms, 2nd parameter for options can be added
// See docs: https://github.com/tokens-studio/sd-transforms
register(StyleDictionary);

StyleDictionary.registerFilter({
  name: 'namespace',
  filter: (token, options) => {
    console.log(token.filePath, options.categorySelector);
    return token.filePath === options.categorySelector;
  },
});

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
    const { usesDtcg } = options;

    /** @param {import('style-dictionary').TransformedToken} token */
    const compileTokenValue = (token) => {
      let value = `${usesDtcg ? token.$value : token.value}`;
      // const originalValue = `${usesDtcg ? token.original.$value : token.original.value}`;

      return isNumeric(value) ? value : `'${value}'`;
    };

    const selectedTokens = dictionary.allTokens.filter((token) =>
      token.filePath.includes(options.categorySelector),
    );

    const header = await fileHeader({ file, options });
    const content = [
      header,
      'export default {',
      selectedTokens.map(
        (token) =>
          `${camelize(token.name)}: ${compileTokenValue(token)},${
            token.comment ? ` // ${token.comment}` : ''
          }`,
      ),
      '}',
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
