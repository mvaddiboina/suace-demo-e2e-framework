import { Page, expect } from "@playwright/test";
import { CheckoutCompleteLocators } from "../locators/checkout.locators";
import { BasePage } from "./BasePage";

// "Checkout: Complete!" - order confirmation page
export class CheckoutCompletePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async verifyOrderPlaced(): Promise<void> {
    await expect(this.page).toHaveURL(/checkout-complete.html/);
    await this.header.verifyPageTitle("Checkout: Complete!");
    await expect(this.el(CheckoutCompleteLocators.completeHeader)).toHaveText("Thank you for your order!");
    await this.header.verifyCartIsEmpty();
  }

  async clickBackHome(): Promise<void> {
    await this.el(CheckoutCompleteLocators.backHomeButton).click();
  }
}
