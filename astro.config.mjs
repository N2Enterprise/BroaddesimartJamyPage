import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import cloudflare from "@astrojs/cloudflare";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  ViewTransitions: true,
  output: "server",
  adapter: cloudflare(),
  site: 'https://broaddesimart.com',
  integrations: [tailwind(), react(), sitemap(
    {
      filter: (page) => page !== 'https://broaddesimart.com/products1/' &&  page !== 'https://broaddesimart.com/gallery/',
    }
  )]
});