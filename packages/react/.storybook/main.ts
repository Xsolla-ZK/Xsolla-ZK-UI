import { StorybookConfig } from '@storybook/react-vite';
import path from 'path';

const config: StorybookConfig = {
  stories: [
    '../src/components/semantic-text/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../src/components/separator/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../src/components/button/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../src/components/chips/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../src/components/badge/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../src/components/rich-icon/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../src/components/breadcrumbs/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../src/components/flex-button/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../src/components/pimple/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../src/components/typography/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../src/components/input/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../src/components/input-new/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../src/components/checkbox/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../src/components/radio-group/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../src/components/tabs/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../src/components/loader/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../src/components/nav-bar/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../src/components/field/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../src/docs/*.stories.@(js|jsx|mjs|ts|tsx)',
    // '../src/components/dropdown/*.stories.@(js|jsx|mjs|ts|tsx)',
    // '../src/components/sheet/*.stories.@(js|jsx|mjs|ts|tsx)',
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

  viteFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          '@xsolla-zk/config/web': path.resolve(__dirname, '../../config/src/web.ts'),
          '@xsolla-zk/icons': path.resolve(__dirname, '../../icons/src'),
          '@tamagui/stacks': path.resolve(__dirname, '../src/components/stacks')
        },
      },
    };
  },
};

export default config;
