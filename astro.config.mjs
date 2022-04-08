import { defineConfig } from 'astro/config';
import nodeServer from '@astrojs/node';
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap(), svelte()],
  site: 'https://someantics.dev',
  adapter: netlify()
});