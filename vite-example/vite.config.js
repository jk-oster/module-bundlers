import { defineConfig } from "vite";

export default defineConfig({
  root: "src",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
    watch: {
        usePolling: true
    }
  },
});
