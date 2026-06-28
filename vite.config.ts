import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Allow GitHub Pages project sites served from /<repo>/ by passing BASE_PATH at build time.
const base = process.env.BASE_PATH || "/";

export default defineConfig({
  base,
  tanstackStart: {
    server: { entry: "server" },
    // SPA mode: emit a static index.html shell that hydrates on the client.
    spa: { enabled: true },
  },
  // Disable the nitro/cloudflare server build — output pure static files for GitHub Pages.
  nitro: false,
});
