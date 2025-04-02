// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://behangmotief-astro.vercel.app',
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  integrations: [react(), sitemap({
    i18n: {
      defaultLocale: 'nl',
      locales: {
        en: 'en-US',
        nl: 'nl-BE',
      },
    },
  })],

  vite: {
    plugins: [tailwindcss()]
  },

  i18n: {
    locales: ["nl", "en"],
    defaultLocale: "nl",
    routing: {
      prefixDefaultLocale: true,
    },
  }
});