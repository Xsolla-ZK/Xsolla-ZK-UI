#!/usr/bin/env node
/* eslint-disable max-lines */
import fse from 'fs-extra';
import path from 'path';
import prettier from 'prettier';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { optimize } from 'svgo';
import chalk from 'chalk';
import crypto from 'crypto';
import prettierConfig from './prettier.config.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const logger = {
  info: (...args) => console.info(chalk.blue('ℹ'), ...args),
  success: (...args) => console.info(chalk.green('✔'), ...args),
  warning: (...args) => console.info(chalk.yellow('⚠'), ...args),
  error: (...args) => console.error(chalk.red('✖'), ...args),
};

const packageJson = JSON.parse(
  await fse.promises.readFile(path.resolve(__dirname, './package.json'), 'utf-8'),
);
const version = packageJson.version;

const packageJsonExports = {};

const getSvgoConfig = (bypass = false) =>
  /** @type {import('svgo').Config} */ ({
    plugins: [
      {
        name: 'preset-default',
      },
      {
        name: 'removeAttrs',
        params: {
          attrs: [
            'class',
            'data-name',
            'id',
            'style',
            'stroke:(?!none)',
            'fill:(?!none)',
            'width',
            'height',
          ],
        },
        ...(bypass
          ? {
              fn: (ast, params) => {
                for (const node of ast.children) {
                  if (node.type === 'element' && node.name === 'svg') {
                    if (node.attributes) {
                      for (const attr of params.attrs) {
                        delete node.attributes[attr];
                      }
                    }
                  }
                }
              },
            }
          : {}),
      },
      ...(!bypass
        ? [
            {
              name: 'convertColors',
              params: {
                currentColor: true,
              },
            },
          ]
        : []),
      {
        name: 'removeDimensions',
        active: true,
      },
      {
        name: 'removeXMLNS',
        active: true,
      },
      {
        name: 'removeXlink',
        active: true,
      },
      {
        name: 'addAttributesToSVGElement',
        params: bypass
          ? {
              attributes: [{ viewBox: '0 0 24 24', size: '{size}' }],
            }
          : {
              attributes: [{ viewBox: '0 0 24 24', size: '{size}', color: 'black' }],
            },
      },
    ],
  });

const SVG_COMPONENT_MAP = {
  svg: {
    component: 'SvgThemed',
    close: true,
    special: (tag, attrs) => `<SvgThemed${attrs} {...otherProps}>`,
  },
  circle: { component: '_Circle', close: true },
  ellipse: { component: 'Ellipse', close: true },
  g: { component: 'G', close: true },
  linearGradient: { component: 'LinearGradient', close: true },
  radialGradient: { component: 'RadialGradient', close: true },
  path: { component: 'Path', close: true },
  line: { component: 'Line', close: true },
  polygon: { component: 'Polygon', close: true },
  polyline: { component: 'Polyline', close: true },
  rect: { component: 'Rect', close: true },
  symbol: { component: 'Symbol', close: true },
  text: { component: '_Text', close: true },
  use: { component: 'Use', close: true },
  defs: { component: 'Defs', close: true },
  stop: { component: 'Stop', close: true },
  clipPath: { component: 'ClipPath', close: true },
  mask: { component: 'Mask', close: true },
};

/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  if (/^[a-z][A-Za-z0-9]*$/.test(str)) return str;
  return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
}

/**
 * @param {string} val
 * @returns {string}
 */
function capitalizeFirstLetter(val) {
  return val.charAt(0).toUpperCase() + val.slice(1);
}

async function findSvgFiles(dir) {
  const files = await fse.readdir(dir, { withFileTypes: true });
  const svgFiles = [];

  for (const file of files) {
    const res = path.resolve(dir, file.name);
    if (file.isDirectory()) {
      svgFiles.push(...(await findSvgFiles(res)));
    } else if (path.extname(res) === '.svg') {
      svgFiles.push(res);
    }
  }

  return svgFiles;
}

// Format the code with prettier
async function formatCode(code) {
  const options = await prettier.resolveConfig(process.cwd());
  return prettier.format(code, {
    ...(options !== null ? options : prettierConfig),
    parser: 'typescript',
  });
}

/**
 * Convert CSS style string to React style object
 * @param {string} styleStr - CSS style string like "fill: red; stroke-width: 2"
 * @returns {string} - React style object string like "{fill: 'red', strokeWidth: '2'}"
 */
function cssToReactStyle(styleStr) {
  const styles = styleStr
    .split(';')
    .map((s) => s.trim())
    .filter((s) => s.length > 0)
    .map((s) => {
      const [key, value] = s.split(':').map((p) => p.trim());
      if (!key || !value) return null;

      // Convert kebab-case to camelCase
      const camelKey = key.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());

      return `${camelKey}: '${value}'`;
    })
    .filter((s) => s !== null);

  return styles;
}

function transformSvg(svg, originalContent, bypass = false) {
  const usedComponents = new Set([]); // Svg is always needed
  // Create stable uniqueId based on file content hash
  const uniqueId = crypto.createHash('md5').update(originalContent).digest('hex').substring(0, 8);

  let transformedSvg = svg;

  if (!bypass) {
    transformedSvg = transformedSvg
      // .replace(/(?:fill|stroke)="currentColor"/g, (match) =>
      //   match.replace('"currentColor"', '{color}'),
      // )
      // .replace(/(?:color)="black"/g, (match) => match.replace('"black"', '{color}'))
      .replace(/(?:color)="black"/g, (match) => match.replace('"black"', '{color}'));
  }

  transformedSvg = transformedSvg
    // Replace attributes
    .replace(/(?:width|height|size)="{size}"/g, (match) => match.replace('"{size}"', '{size}'))
    .replace(/px/g, '')
    .replace(/\bid="([^"]+)"/g, `id="${uniqueId}-$1"`) // id replace with uniqueId
    .replace(/url\(#([^)]+)\)/g, `url(#${uniqueId}-$1)`) // url references to id
    .replace(/href="#([^"]+)"/g, `href="#${uniqueId}-$1"`) // href references to id
    .replace(/xlink:href="#([^"]+)"/g, `xlink:href="#${uniqueId}-$1"`) // xlink:href references to id
    // style attribute to React format
    .replace(/\bstyle="([^"]+)"/g, (_, styleStr) => {
      const obj = cssToReactStyle(styleStr);
      return obj ? ` style={{ ${obj} }}` : '';
    })

    // Camelize kebab-case attributes (only attribute names, not values)
    .replace(/\b([a-z][a-z0-9]*(?:-[a-z][a-z0-9]*)+)(?==)/gi, (match) =>
      match.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase()),
    )
    // Replace SVG tags with React Native components
    .replace(
      new RegExp(`<(/?)(${Object.keys(SVG_COMPONENT_MAP).join('|')})([^>]*)>`, 'g'),
      (match, slash, tag, attrs) => {
        const config = SVG_COMPONENT_MAP[tag];
        if (!config) return match;

        // Add component to Set when the opening tag appears for the first time
        if (!slash) {
          if (config.component !== 'SvgThemed') usedComponents.add(config.component);
        }

        // If this is a closing tag
        if (slash) {
          return config.close ? `</${config.component}>` : '';
        }

        // If there is special processing (like for svg tag)
        if (config.special) {
          return config.special(tag, attrs);
        }

        return `<${config.component}${attrs}>`;
      },
    );

  return {
    content: transformedSvg,
    components: Array.from(usedComponents),
  };
}

// Update package.json with exports
async function updatePackageJsonExports(projectDir) {
  const packageJsonPath = path.join(projectDir, 'package.json');

  if (!(await fse.pathExists(packageJsonPath))) {
    logger.warning(`package.json not found in ${packageJsonPath}`);
    return;
  }

  try {
    const packageJson = JSON.parse(await fse.readFile(packageJsonPath, 'utf-8'));

    // Update the exports section
    // First, remove all existing icon exports to avoid dead exports for deleted icons
    packageJson.exports = {
      ...Object.fromEntries(
        Object.entries(packageJson.exports || {}).flatMap((entry) => {
          if (entry[0].startsWith('./icons')) {
            return [];
          }
          return [entry];
        }),
      ),
      ...packageJsonExports,
    };

    // Save the updated package.json
    const formattedPackageJson = JSON.stringify(packageJson, null, 2);
    await fse.writeFile(packageJsonPath, formattedPackageJson);

    logger.success(
      `Updated exports in ${packageJsonPath} (${Object.keys(packageJsonExports).length} icons)`,
    );
  } catch (error) {
    logger.error(`Error updating package.json: ${error.message}`);
  }

  // Clean up the exports object for the next usage
  Object.keys(packageJsonExports).forEach((key) => delete packageJsonExports[key]);
}

// Main logic of icons generation
async function generateIcons({ input, output, bypass = false }) {
  const iconsDir = path.resolve(input);
  const outDir = path.resolve(output);
  const indexFile = path.join(path.dirname(outDir), 'index.ts');

  // Clean and create directories
  await fse.emptyDir(outDir);
  if (await fse.pathExists(indexFile)) {
    await fse.remove(indexFile);
  }

  logger.info('Finding SVG files...');
  const icons = await findSvgFiles(iconsDir);
  logger.success(`Found ${icons.length} icons`);

  const iconExports = [];

  for (const iconPath of icons) {
    const svg = await fse.readFile(iconPath, 'utf-8');
    const id = path.basename(iconPath, '.svg');
    const fileName = `${id}.tsx`;
    const location = path.join(outDir, fileName);

    const { data: normalizedSvg } = optimize(svg, {
      ...getSvgoConfig(bypass),
      path: undefined,
    });

    const { content: svgContent, components: usedComponents } = transformSvg(
      normalizedSvg,
      svg,
      bypass,
    );

    const componentImports = usedComponents.join(',\n');
    const cname = capitalizeFirstLetter(camelize(id));

    const propsDestructuring = bypass
      ? '{ size = 24, ...otherProps }'
      : "{ color = 'black', size = 24, ...otherProps }";

    const componentCode = `
      import { SvgThemed } from '@xsolla-zk/ui-primitives'
      import { memo } from 'react'
      import {
        ${componentImports}
      } from 'react-native-svg'

      import type { IconProps } from '@xsolla-zk/ui-primitives'

      const Icon = (props: IconProps) => {
        const ${propsDestructuring} = props
        return ${svgContent}
      }

      export const ${cname} = memo(Icon)
    `;

    const formattedCode = await formatCode(componentCode);
    await fse.writeFile(location, formattedCode);
    const targetDirName = path.basename(outDir);
    iconExports.push(`export { ${cname} } from './${targetDirName}/${id}'`);
    packageJsonExports[`./icons/${cname}`] = {
      import: `./dist/esm/icons/${cname + '.mjs'}`,
      require: `./dist/cjs/icons/${cname + '.cjs'}`,
    };

    logger.success(`Generated: ${fileName}`);
  }

  // Create and format the index file
  const formattedIndex = await formatCode(iconExports.join('\n'));
  await fse.writeFile(indexFile, formattedIndex);
  logger.success(`Generated index file at: ${indexFile}`);

  // Update package.json with exports
  await updatePackageJsonExports(process.cwd());
}

// CLI configuration
yargs(hideBin(process.argv))
  .command({
    command: 'generate',
    aliases: ['gen', 'g'],
    desc: 'Generate React Native icon components from SVG files',
    builder: (yargs) =>
      yargs
        .option('input', {
          alias: 'i',
          type: 'string',
          description: 'Input directory containing SVG icons',
          demandOption: true,
        })
        .option('output', {
          alias: 'o',
          type: 'string',
          description: 'Output directory for generated icon components',
          demandOption: true,
        })
        .option('bypass', {
          alias: 'b',
          type: 'boolean',
          description: 'Bypass color processing and currentColor conversion',
          default: false,
        })
        .check((argv) => {
          const resolvedOutput = path.resolve(argv.output);
          if (resolvedOutput === '/' || resolvedOutput === path.parse(resolvedOutput).root) {
            throw new Error('Output directory cannot be root directory');
          }
          if (!fse.existsSync(argv.input)) {
            throw new Error('Input directory does not exist');
          }
          return true;
        }),
    handler: async (argv) => {
      try {
        await generateIcons(argv);
      } catch (error) {
        logger.error('Error:', error);
        process.exit(1);
      }
    },
  })
  .version(version)
  .alias('v', 'version')
  .help('h')
  .alias('h', 'help')
  .epilogue(
    'For more information visit: https://github.com/Xsolla-ZK/Xsolla-ZK-UI/tree/main/packages/icons-generator',
  )
  .strict()
  .parse();
