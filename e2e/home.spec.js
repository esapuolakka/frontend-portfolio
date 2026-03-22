// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Portfolio/);
});

test('bookstore link', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Login' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page).toHaveURL('http://localhost:5173/login');
});
