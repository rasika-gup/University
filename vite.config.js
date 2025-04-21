import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 5173,
    host: true,
    open: true
  },
  publicDir: 'public',
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
}); 