#!/usr/bin/env node
import fse from 'fs-extra';
import path from 'path';
import prettier from 'prettier';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { optimize } from 'svgo';
import chalk from 'chalk';

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

const svgoConfig = {
  plugins: [
    {
      name: 'preset-default',
    },
    {
      name: 'removeAttrs',
      params: {
        attrs: ['class', 'data-name', 'id', 'style', 'stroke:(?!none)', 'fill:(?!none)'],
      },
    },
    {
      name: 'convertColors',
      params: {
        currentColor: true,
      },
    },
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
      params: {
        attributes: [{ width: '24' }, { height: '24' }],
      },
    },
  ],
};

const SVG_COMPONENT_MAP = {
  svg: { component: 'Svg', close: true, special: (tag, attrs) => `<Svg${attrs} {...otherProps}>` },
  circle: { component: '_Circle', close: true },
  ellipse: { component: 'Ellipse', close: true },
  g: { component: 'G', close: true },
  'linear-gradient': { component: 'LinearGradient', close: true },
  'radial-gradient': { component: 'RadialGradient', close: true },
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
    ...options,
    parser: 'typescript',
  });
}

function transformSvg(svg) {
  const usedComponents = new Set(['Svg']); // Svg is always needed

  const transformedSvg = svg
    // Replace attributes
    .replace(/(?:fill|stroke)="currentColor"/g, (match) =>
      match.replace('"currentColor"', '{color}'),
    )
    .replace(/(?:width|height)="24"/g, (match) => match.replace('"24"', '{size}'))
    .replace(/px/g, '')
    // Replace SVG tags with React Native components
    .replace(
      new RegExp(`<(/?)(${Object.keys(SVG_COMPONENT_MAP).join('|')})([^>]*)>`, 'g'),
      (match, slash, tag, attrs) => {
        const config = SVG_COMPONENT_MAP[tag];
        if (!config) return match;

        // Add component to Set when the opening tag appears for the first time
        if (!slash) {
          usedComponents.add(config.component);
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

// Main logic of icons generation
async function generateIcons({ input, output }) {
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
      ...svgoConfig,
      path: undefined,
    });

    const { content: svgContent, components: usedComponents } = transformSvg(normalizedSvg);

    const componentImports = usedComponents.join(',\n');
    const cname = capitalizeFirstLetter(camelize(id));

    const componentCode = `
      import { themed } from '@tamagui/helpers-icon'
      import { memo } from 'react'
      import {
        ${componentImports}
      } from 'react-native-svg'
      import type { IconProps } from '@tamagui/helpers-icon'
      import type { ComponentProps, FC } from 'react'

      type Props = ComponentProps<typeof Svg> & {
        size: number
      }

      const Icon: FC = (props) => {
        const { color = 'black', size = 24, ...otherProps } = props as Props
        return ${svgContent}
      }

      export const ${cname} = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }))
    `;

    const formattedCode = await formatCode(componentCode);
    await fse.writeFile(location, formattedCode);
    const targetDirName = path.basename(outDir);
    iconExports.push(`export { ${cname} } from './${targetDirName}/${id}'`);

    logger.success(`Generated: ${fileName}`);
  }

  // Create and format the index file
  const formattedIndex = await formatCode(iconExports.join('\n'));
  await fse.writeFile(indexFile, formattedIndex);
  logger.success(`Generated index file at: ${indexFile}`);
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
