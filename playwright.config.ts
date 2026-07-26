import { defineConfig } from '@playwright/test'

/**
 * Smoke tests E2E. Verifican que las rutas clave responden y que los arreglos
 * de arquitectura siguen en pie (enlaces de repo correctos, GeriCare retirado).
 * En local reutiliza un servidor ya levantado (`yarn dev` o `yarn start`).
 * En CI construye y sirve la app.
 */
export default defineConfig({
  testDir: './tests/e2e',
  timeout: 30_000,
  expect: { timeout: 10_000 },
  fullyParallel: true,
  retries: process.env.CI ? 1 : 0,
  reporter: 'line',
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
  },
  webServer: {
    command: 'yarn build && yarn start',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
    timeout: 180_000,
  },
})
