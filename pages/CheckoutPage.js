export class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.checkoutBtn = '#checkout';
    this.firstName = '#first-name';
    this.lastName = '#last-name';
    this.postalCode = '#postal-code';
    this.continueBtn = '#continue';
    this.finishBtn = '#finish';
  }

  async startCheckout() {
    await this.page.click(this.checkoutBtn);
  }

  async fillForm() {
    await this.page.fill(this.firstName, 'Maria');
    await this.page.fill(this.lastName, 'QA');
    await this.page.fill(this.postalCode, '12345');
    await this.page.click(this.continueBtn);
  }

  async finish() {
    await this.page.click(this.finishBtn);
  }
}