// import react from '@vitejs/plugin-react';
import path from 'path';
import { tamaguiPlugin } from '@tamagui/vite-plugin';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    react(),
    tamaguiPlugin({
      // points to your tamagui config file
      config: './tamagui.config.ts',
      // points to any linked packages or node_modules
      // that have tamagui components to optimize
      components: ['@tamagui/core'],
      // turns on the optimizing compiler
      optimize: true,
    }),
    tsconfigPaths(),
  ].filter(Boolean),
  resolve: {
    alias: {
      '@tamagui/stacks': path.resolve(__dirname, 'src/components/stacks'),
    },
  },
});
