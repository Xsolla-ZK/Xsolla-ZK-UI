import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
// import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  // plugins: [react()] as UserConfig['plugins'],
});
