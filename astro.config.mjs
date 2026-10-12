import { fileURLToPath } from "node:url";
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import lottie from "astro-integration-lottie";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://nodeflux.org/",
  trailingSlash: "always",
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
    lottie(),
    sitemap({ filter: (page) => !page.includes("/referral/") }),
  ],
  // Astro 4 only reads tsconfig "paths" when "baseUrl" is set, so the "@/" alias is declared here instead.
  vite: {
    resolve: {
      alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) },
    },
  },
});
