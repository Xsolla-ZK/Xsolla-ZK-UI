#!/usr/bin/env node
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import runBuild from './build.mjs';
import { execSync } from 'child_process';
import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';
import { formatMap } from './utils/mappings.mjs';
import dotenv from 'dotenv';
import { readJsonFile } from './utils/files.mjs';
import { logger } from './utils/log.mjs';
import { ROOT_DIR } from './utils/constants.mjs';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const packageJson = readJsonFile(path.resolve(__dirname, '../package.json'));
const version = packageJson.version;

dotenv.config({ path: resolve(ROOT_DIR, '.env.local') });

const REPO_URL = `https://${process.env.GITHUB_TOKEN}@github.com/Xsolla-ZK/Design-Tokens.git`;
const TEMP_CLONE_DIR = path.resolve(ROOT_DIR, '.temp-tokens');

const formatKeys = Object.keys(formatMap);

/**
 * @param {string} branch
 * @returns {Promise<string>}
 */
async function getTokensFromRepo(branch) {
  try {
    logger.info(`Cloning tokens from branch ${chalk.cyan(branch)}...`);
    if (await fs.pathExists(TEMP_CLONE_DIR)) {
      logger.info(`Removing existing directory ${chalk.cyan(TEMP_CLONE_DIR)}...`);
      await fs.remove(TEMP_CLONE_DIR);
    }
    await fs.ensureDir(TEMP_CLONE_DIR);
    execSync(`git clone -b ${branch} ${REPO_URL} ${TEMP_CLONE_DIR}`, {
      stdio: 'inherit',
      cwd: ROOT_DIR,
    });
    logger.success(`Tokens successfully cloned to ${chalk.cyan(TEMP_CLONE_DIR)}`);
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

        logger.info('Starting token generation...');
        logger.info(`Generation type: ${chalk.cyan(argv.type)}`);

        if (argv.source === 'local') {
          inputPath = resolve(ROOT_DIR, argv.input);
          if (!fs.existsSync(inputPath)) {
            throw new Error(`Local directory not found: ${inputPath}`);
          }
          logger.info(`Using local tokens from: ${chalk.cyan(inputPath)}`);
        } else {
          logger.info(`Getting tokens from repository, branch: ${chalk.cyan(argv.input)}`);
          inputPath = await getTokensFromRepo(argv.input);
        }

        process.env.XSOLLA_ZK_UI_TOKENS_INPUT_PATH = inputPath;
        process.env.XSOLLA_ZK_UI_TOKENS_OUTPUT_PATH = outputPath;
        process.argv.push('--format', argv.type);

        logger.info(`Launch of token generation in the format ${chalk.cyan(argv.type)}...`);
        await runBuild();
        logger.success(`Tokens successfully generated in: ${chalk.cyan(outputPath)}`);
      } catch (error) {
        logger.error('Error generating tokens:', error.message);
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
