#!/usr/bin/env node
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import runBuild from './build.mjs';
import transformTypographyToFonts from './typography.mjs';
import { execSync } from 'child_process';
import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';
import { formatMap } from './utils/mappings.mjs';
const { promises } = fs;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const packageJson = JSON.parse(
  await promises.readFile(path.resolve(__dirname, '../package.json'), 'utf-8'),
);

const version = packageJson.version;

const REPO_URL = `https://${process.env.GITHUB_TOKEN}@github.com/Xsolla-ZK/Design-Tokens.git`;
const ROOT_DIR = process.env.XSOLLA_ZK_UI_TOKENS_ROOT_DIR || process.cwd();
const TEMP_CLONE_DIR = path.resolve(ROOT_DIR, '.temp-tokens');

const formatKeys = Object.keys(formatMap);

const log = {
  info: (...args) => console.info(chalk.blue('ℹ'), ...args),
  success: (...args) => console.info(chalk.green('✔'), ...args),
  warning: (...args) => console.info(chalk.yellow('⚠'), ...args),
  error: (...args) => console.error(chalk.red('✖'), ...args),
};
/**
 * @param {string} branch
 * @returns {Promise<string>}
 */
async function getTokensFromRepo(branch) {
  try {
    log.info(`Cloning tokens from branch ${chalk.cyan(branch)}...`);
    if (await fs.pathExists(TEMP_CLONE_DIR)) {
      log.info(`Removing existing directory ${chalk.cyan(TEMP_CLONE_DIR)}...`);
      await fs.remove(TEMP_CLONE_DIR);
    }
    await fs.ensureDir(TEMP_CLONE_DIR);
    execSync(`git clone -b ${branch} ${REPO_URL} ${TEMP_CLONE_DIR}`, {
      stdio: 'inherit',
      cwd: ROOT_DIR,
    });
    log.success(`Tokens successfully cloned to ${chalk.cyan(TEMP_CLONE_DIR)}`);
    return TEMP_CLONE_DIR;
  } catch (error) {
    const maskedError = error.message.replace(new RegExp(`${process.env.GITHUB_TOKEN}@`, 'g'), '');
    throw new Error(`Error getting tokens from repository: ${maskedError}`);
  }
}

yargs(hideBin(process.argv))
  .command({
    command: 'generate',
    describe: 'Generate tokens',
    builder: (yargs) =>
      yargs
        .option('output', {
          alias: 'o',
          describe: 'Output path for files',
          type: 'string',
          default: './tokens',
        })
        .option('type', {
          alias: 't',
          describe: `Generation type (${formatKeys.join(', ')})`,
          type: 'string',
          default: 'object',
          choices: formatKeys,
        })
        .option('input', {
          alias: 'i',
          describe: 'Path to local tokens or branch name in Design-Tokens repository',
          type: 'string',
          default: 'main',
        })
        .option('source', {
          alias: 's',
          describe: 'Token source (local or repo)',
          type: 'string',
          default: 'repo',
          choices: ['local', 'repo'],
        }),
    handler: async (argv) => {
      try {
        const outputPath = resolve(ROOT_DIR, argv.output);
        let inputPath;

        log.info('Starting token generation...');
        log.info(`Generation type: ${chalk.cyan(argv.type)}`);

        if (argv.source === 'local') {
          inputPath = resolve(ROOT_DIR, argv.input);
          if (!fs.existsSync(inputPath)) {
            throw new Error(`Local directory not found: ${inputPath}`);
          }
          log.info(`Using local tokens from: ${chalk.cyan(inputPath)}`);
        } else {
          log.info(`Getting tokens from repository, branch: ${chalk.cyan(argv.input)}`);
          inputPath = await getTokensFromRepo(argv.input);
        }

        process.env.XSOLLA_ZK_UI_TOKENS_INPUT_PATH = inputPath;
        process.env.XSOLLA_ZK_UI_TOKENS_OUTPUT_PATH = outputPath;
        process.argv.push('--format', argv.type);

        switch (argv.type) {
          case 'tamagui':
            log.warning('Running token generation for Tamagui configuration...');
            await runBuild();
            await transformTypographyToFonts();
            break;

          case 'css':
          case 'scss':
          case 'object':
          default:
            log.info(`Running ${argv.type} generation...`);
            await runBuild();
            break;
        }
        log.success(`Tokens successfully generated in: ${chalk.cyan(outputPath)}`);
      } catch (error) {
        log.error('Error generating tokens:', error.message);
        throw error;
      } finally {
        await fs.remove(TEMP_CLONE_DIR);
      }
    },
  })
  .version(version)
  .alias('v', 'version')
  .help('h')
  .alias('h', 'help')
  .epilogue(
    'For more information visit: https://github.com/Xsolla-ZK/Xsolla-ZK-UI/tree/main/packages/tokens',
  )
  .strict()
  .parse();
