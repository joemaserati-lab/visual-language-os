import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        mindset: resolve(__dirname, 'mindset.html'),
        typography: resolve(__dirname, 'systems/typography.html'),
        motion: resolve(__dirname, 'systems/motion.html'),
        components: resolve(__dirname, 'systems/components.html'),
        progressiveRecognition: resolve(__dirname, 'patterns/progressive-recognition.html'),
        reference: resolve(__dirname, 'reference/index.html'),
        laboratory: resolve(__dirname, 'laboratory/index.html')
      }
    }
  }
});
