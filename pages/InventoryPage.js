export class InventoryPage {
  constructor(page) {
    this.page = page;
    this.inventoryList = '.inventory_list';
    this.addToCartBtn = '.btn_inventory';
    this.cartLink = '.shopping_cart_link';
  }

  async isLoaded() {
    await this.page.waitForSelector(this.inventoryList);
  }

  async addFirstProduct() {
    await this.page.locator(this.addToCartBtn).first().click();
  }

  async goToCart() {
    await this.page.click(this.cartLink);
  }
}