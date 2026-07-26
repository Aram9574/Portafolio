import { test, expect } from '@playwright/test'

test('home carga y muestra el titular principal', async ({ page }) => {
  const res = await page.goto('/')
  expect(res?.status()).toBeLessThan(400)
  await expect(page.locator('h1').first()).toBeVisible()
})

test('el blog lista artículos', async ({ page }) => {
  await page.goto('/blog')
  await expect(page.locator('a[href^="/blog/"]').first()).toBeVisible()
})

test('proyecto estrella: el enlace al repo apunta a la cuenta correcta', async ({ page }) => {
  await page.goto('/proyectos/clinai-classifier')
  await expect(
    page.locator('a[href*="github.com/Aram9574/clinai-classifier"]')
  ).toHaveCount(1)
  // El usuario erróneo no debe aparecer en ningún enlace.
  await expect(page.locator('a[href*="github.com/aramzakzuk"]')).toHaveCount(0)
})

test('el formulario de contacto está presente', async ({ page }) => {
  await page.goto('/contacto')
  await expect(page.locator('form').first()).toBeVisible()
  await expect(
    page.locator('input[type="email"], input[name="email"]').first()
  ).toBeVisible()
})

test('GeriCare (proyecto deprecado) devuelve 404', async ({ page }) => {
  const res = await page.goto('/proyectos/erp-geriatrico-fhir')
  expect(res?.status()).toBe(404)
})
