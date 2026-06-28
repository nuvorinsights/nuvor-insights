import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Allow GitHub Pages project sites served from /<repo>/ by passing BASE_PATH at build time.
const base = process.env.BASE_PATH || "/";

export default defineConfig({
  vite: { base },
  tanstackStart: {
    server: { entry: "server" },
    spa: { enabled: true },
  },
  nitro: false,
});
