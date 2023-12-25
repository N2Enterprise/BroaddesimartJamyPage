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
  integrations: [tailwind(), react(), sitemap()]
});