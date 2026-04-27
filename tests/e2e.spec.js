import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test('Flujo completo de compra', async ({ page }) => {

  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);
  const checkout = new CheckoutPage(page);

  await login.goTo();
  await login.login('standard_user', 'secret_sauce');

  await inventory.isLoaded();
  await inventory.addFirstProduct();
  await inventory.goToCart();

  await checkout.startCheckout();
  await checkout.fillForm();
  await checkout.finish();

  await expect(page).toHaveURL(/checkout-complete/);
});