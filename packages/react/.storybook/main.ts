import { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    '../src/components/semantic-text/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../src/components/button/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../src/components/rich-icon/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  // stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  addons: ['@storybook/addon-essentials', '@storybook/experimental-addon-test'],
  staticDirs: ['../static'],

  previewHead: (head) => `
    ${head}
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Onest:wght@100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
  `,

  // viteFinal: async (_config) => ({
  //   optimizeDeps: {
  //     exclude: ['node_modules/.cache/storybook'],
  //   },
  // }),
};

export default config;
