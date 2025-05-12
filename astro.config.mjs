// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://alejando.github.io',
  base: '/samantha-quince',
  vite: {
    plugins: [tailwindcss()]
  }
});