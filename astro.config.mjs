// @ts-check
import { defineConfig } from 'astro/config';
import { SITE } from './src/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  vite: {
    // @ts-ignore
    plugins: [tailwindcss()]
  },
  server: {
    allowedHosts: [
      '.ngrok-free.app',   // allow all ngrok domains
    ]
  },


  integrations: [react()]
});
