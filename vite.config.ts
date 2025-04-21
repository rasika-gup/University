import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        admissions: resolve(__dirname, 'admissions.html'),
        about: resolve(__dirname, 'about.html'),
        contact: resolve(__dirname, 'contact.html'),
        programs: resolve(__dirname, 'programs.html'),
        research: resolve(__dirname, 'research.html'),
        studentlife: resolve(__dirname, 'studentlife.html')
      }
    }
  },
  server: {
    port: 5175,
    open: true
  }
}) 