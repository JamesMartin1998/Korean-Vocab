import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  base: '/Korean-Vocab/',
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'dist/index.html',
          dest: '', // Copy to the root of the output directory as 404.html
          rename: '404.html',
        },
      ],
    }),
  ],
});
