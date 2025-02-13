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

const log = {
  info: (...args) => console.log(chalk.blue('ℹ'), ...args),
  success: (...args) => console.log(chalk.green('✔'), ...args),
  warning: (...args) => console.log(chalk.yellow('⚠'), ...args),
  error: (...args) => console.error(chalk.red('✖'), ...args),
};

async function getTokensFromRepo(branch) {
  try {
    log.info(`Клонирование токенов из ветки ${chalk.cyan(branch)}...`);
    if (await fs.pathExists(TEMP_CLONE_DIR)) {
      log.info(`Удаление существующей директории ${chalk.cyan(TEMP_CLONE_DIR)}...`);
      await fs.remove(TEMP_CLONE_DIR);
    }
    await fs.ensureDir(TEMP_CLONE_DIR);
    execSync(`git clone -b ${branch} ${REPO_URL} ${TEMP_CLONE_DIR}`, { stdio: 'inherit', cwd: ROOT_DIR });
    log.success(`Токены успешно склонированы в ${chalk.cyan(TEMP_CLONE_DIR)}`);
    return TEMP_CLONE_DIR;
  } catch (error) {
    const maskedError = error.message.replace(new RegExp(`${process.env.GITHUB_TOKEN}@`, 'g'), '');
    throw new Error(`Ошибка при получении токенов из репозитория: ${maskedError}`);
  }
}

yargs(hideBin(process.argv))
  .command({
    command: 'generate',
    describe: 'Генерация токенов',
    builder: (yargs) => {
      return yargs
        .option('output', {
          alias: 'o',
          describe: 'Путь для выходных файлов',
          type: 'string',
          default: './tokens'
        })
        .option('type', {
          alias: 't',
          describe: 'Тип генерации (object, css, tamagui)',
          type: 'string',
          default: 'object',
          choices: ['object', 'css', 'tamagui']
        })
        .option('input', {
          alias: 'i',
          describe: 'Путь к локальным токенам или имя ветки в репозитории Design-Tokens',
          type: 'string',
          default: 'main'
        })
        .option('source', {
          alias: 's',
          describe: 'Источник токенов (local или repo)',
          type: 'string',
          default: 'repo',
          choices: ['local', 'repo']
        });
    },
    handler: async (argv) => {
      try {
        const outputPath = resolve(ROOT_DIR, argv.output);
        let inputPath;

        log.info('Начинаем генерацию токенов...');
        log.info(`Тип генерации: ${chalk.cyan(argv.type)}`);

        if (argv.source === 'local') {
          inputPath = resolve(ROOT_DIR, argv.input);
          if (!fs.existsSync(inputPath)) {
            throw new Error(`Локальная директория не найдена: ${inputPath}`);
          }
          log.info(`Используем локальные токены из: ${chalk.cyan(inputPath)}`);
        } else {
          log.info(`Получаем токены из репозитория, ветка: ${chalk.cyan(argv.input)}`);
          inputPath = await getTokensFromRepo(argv.input);
        }

        process.env.XSOLLA_ZK_UI_TOKENS_INPUT_PATH = inputPath;
        process.env.XSOLLA_ZK_UI_TOKENS_OUTPUT_PATH = outputPath;


        switch (argv.type) {
          case 'tamagui':
            process.argv.push('--tamagui');
            log.warning('Запуск генерации токенов под Tamagui конфигурацию...');
            // await build();
            await transformTypographyToFonts();
            break;

          case 'css':
            // TODO: Добавить поддержку CSS
            log.warning('CSS генерация пока не поддерживается');
            break;

          case 'object':
          default:
            log.info('Запуск генерации объектов...');
            await runBuild();
            break;
        }
        log.success(`Токены успешно сгенерированы в: ${chalk.cyan(outputPath)}`);
      } catch (error) {
        log.error('Ошибка при генерации токенов:', error.message);
        throw error;
      } finally {
        await fs.remove(TEMP_CLONE_DIR);
      }
    }
  })
  .version(version)
  .alias('v', 'version')
  .help('h')
  .alias('h', 'help')
  .epilogue('Для дополнительной информации посетите: https://github.com/Xsolla-ZK/Xsolla-ZK-UI/tree/main/packages/tokens')
  .strict()
  .parse();
