import nextra from 'nextra';
import { withTamagui } from '@tamagui/next-plugin';

const withNextra = nextra({
  search: {
    codeblocks: false,
  },
  contentDirBasePath: '/',
});

const plugins = [
  withNextra,
  withTamagui({
    config: './tamagui.config.ts',
    components: ['@xsolla-zk/react'],
    outputCSS: './public/tamagui.css',
    // outputCSS: process.env.NODE_ENV === 'production' ? './public/tamagui.css' : null,
    disableExtraction: process.env.NODE_ENV === 'development',
    appDir: true,
    logTimings: true,
    disableThemesBundleOptimize: true,
  }),
];

export default () => {
  /** @type {import('next').NextConfig} */
  let config = {
    output: process.env.NODE_ENV === 'production' ? 'standalone' : undefined,
    eslint: {
      ignoreDuringBuilds: true,
    },
    typescript: {
      ignoreBuildErrors: true,
    },
    transpilePackages: ['react-native-web', 'react-native-reanimated'],
    images: {
      unoptimized: true,
    },
    reactStrictMode: true,
  };

  for (const plugin of plugins) {
    config = {
      ...config,
      ...plugin(config),
    };
  }

  return config;
};
