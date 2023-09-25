// vite.config.ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['src/test/**/*.{test,spec}.{ts,js}'],
    reporters: ['verbose'],
    maxThreads: 5,
    minThreads: 1,
    coverage: {
      provider: 'istanbul',
      include: ['src/main/**/*.ts'],
      reporter: ['text', 'lcov'],
    },
  },
});
