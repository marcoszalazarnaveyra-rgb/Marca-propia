import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://marcoszalazar.es',
  output: 'static',
  devToolbar: { enabled: false },
  vite: {
    plugins: [tailwindcss()],
    // Keep executable scripts external so the strict resource policy can run them.
    build: { assetsInlineLimit: (path, content) => !path.endsWith('.js') && content.byteLength < 4096 },
  },
});
