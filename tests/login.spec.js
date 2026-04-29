const { test, expect } = require('@playwright/test');
const { generateTestCases } = require('../utils/ai-test-generator');

const testCases = generateTestCases("Login functionality");

testCases.forEach(tc => {
  test(tc.title, async ({ page }) => {
    await page.goto('https://example.com/login');

    if (tc.title === "Valid login") {
      await page.fill('#username', 'standard_user');
      await page.fill('#password', 'secret_sauce');
      await page.click('#login-button');
      await expect(page).toHaveURL(/dashboard/);
    }

    if (tc.title === "Invalid login") {
      await page.fill('#username', 'wrong');
      await page.fill('#password', 'wrong');
      await page.click('#login-button');
      await expect(page.locator('.error')).toBeVisible();
    }
  });
});