import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    // SPA mode: emit a static index.html shell that hydrates on the client.
    spa: { enabled: true },
  },
  // Disable the nitro/cloudflare server build — output pure static files for GitHub Pages.
  nitro: false,
});
