// vite.config.ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['src/**/*.{test,spec}.{ts,js}'],
    reporters: ['verbose'],
    maxThreads: 5,
    minThreads: 1,
    coverage: {
      reporter: ['text', 'lcov'],
    },
  },
});
