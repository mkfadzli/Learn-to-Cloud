import { test, expect } from '@playwright/test';

test('homepage has site title and navbar', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page).toHaveTitle(/Learn to Cloud/);
  // Navbar shows short title 'LTC'
  await expect(page.locator('text=LTC')).toBeVisible();
});
