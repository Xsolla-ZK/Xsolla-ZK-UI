import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  // plugins: [react()] as UserConfig['plugins'],
});
