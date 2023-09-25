// vite.config.ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['**/*.{test,spec}.{ts,js}'],
    reporters: ['verbose'],
    maxThreads: 1,
    minThreads: 1,
    coverage: {
      provider: 'istanbul',
      include: ['src/**/*.ts'],
      reporter: ['text', 'lcov'],
    },
  },
});
