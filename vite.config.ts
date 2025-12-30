import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import pkg from './package.json';

const appName = pkg.name;

export default defineConfig({
  base: `/${appName}`,
  plugins: [
    vue()
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir: `dist/${appName}`,
  },
});
