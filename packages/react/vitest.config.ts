import storybookTest from '@storybook/experimental-addon-test/vitest-plugin';
import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    plugins: [
      storybookTest({
        // This should match your package.json script to run Storybook
        // The --ci flag will skip prompts and not open a browser
        storybookScript: 'pnpm storybook --ci',
      }),
    ],
    test: {
      globals: true,
      environment: 'jsdom', // Для работы с DOM в тестах
      include: ['src/**/*.stories.?(m)[jt]s?(x)'], // Шаблон для тестов
      coverage: {
        reporter: ['text', 'html'], // Отчеты о покрытии
      },
      browser: {
        enabled: true,
        name: 'chromium',
        provider: 'playwright',
        headless: true,
      },
      isolate: true,
      setupFiles: '.storybook/vitest.setup.ts',
    },
  }),
);
