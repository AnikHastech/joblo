import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Update `site` to your production URL before deploying.
// It powers @astrojs/sitemap, canonical URLs, RSS feed, and JSON-LD schemas.
export default defineConfig({
  site: 'https://joblo.example.com',
  output: 'static',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/dashboard') && !page.includes('/employer'),
      changefreq: 'weekly',
      priority: 0.7,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
