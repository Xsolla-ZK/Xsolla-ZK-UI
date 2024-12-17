import { storybookTest } from '@storybook/experimental-addon-test/vitest-plugin';
import { defineWorkspace } from 'vitest/config';

// More info at: https://storybook.js.org/docs/writing-tests/vitest-plugin
export default defineWorkspace([
  './vitest.config.ts',
  {
    extends: './vite.config.ts',
    plugins: [
      // See options at: https://storybook.js.org/docs/writing-tests/vitest-plugin#storybooktest
      storybookTest({
        storybookScript: 'pnpm storybook --ci',
        tags: {
          include: ['test'],
          exclude: ['experimental'],
        },
      }),
    ],
    test: {
      name: 'storybook',
      // Make sure to adjust this pattern to match your stories files.
      include: ['**/*.stories.?(m)[jt]s?(x)'],
      browser: {
        enabled: true,
        headless: true,
        name: 'chromium',
        provider: 'playwright',
      },
      // Speed up tests and better match how they run in Storybook itself
      // https://vitest.dev/config/#isolate
      // Consider removing this if you have flaky tests
      isolate: false,
      setupFiles: '.storybook/vitest.setup.ts',
    },
  },
]);
