import chalk from 'chalk';

export const logger = {
  info: (...args) => console.info(chalk.blue('ℹ'), ...args),
  success: (...args) => console.info(chalk.green('✔'), ...args),
  warning: (...args) => console.info(chalk.yellow('⚠'), ...args),
  error: (...args) => console.error(chalk.red('✖'), ...args),
};
