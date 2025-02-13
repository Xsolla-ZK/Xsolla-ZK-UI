import storybookTest from '@storybook/experimental-addon-test/vitest-plugin';
import { coverageConfigDefaults, defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    plugins: [
      storybookTest({
        // This should match your package.json script to run Storybook
        // The --ci flag will skip prompts and not open a browser
        storybookScript: 'pnpm storybook --ci',
        tags: {
          include: ['test'],
          exclude: ['experimental'],
        },
      }),
    ],
    test: {
      globals: true,
      environment: 'jsdom',
      coverage: {
        provider: 'v8',
        include: ['src/**/*.{ts,tsx}'],
        exclude: [
          ...coverageConfigDefaults.exclude,
          '**/.storybook/**',
          '**/*.stories.*',
          '**/storybook-static/**',
          '**/storybook-build/**',
        ],
      },
      browser: {
        enabled: true,
        provider: 'playwright',
        headless: true,
        instances: [
          {
            name: 'storybook-chromium',
            browser: 'chromium',
          },
        ],
      },
      isolate: true,
      setupFiles: ['./.storybook/vitest.setup.ts'],
    },
  }),
);
