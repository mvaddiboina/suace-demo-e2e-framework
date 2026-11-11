import { Page, expect } from "@playwright/test";
import { CheckoutOverviewLocators } from "../locators/checkout.locators";
import { BasePage } from "./BasePage";

// Checkout step two - "Checkout: Overview"
export class CheckoutOverviewPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async expectLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(/checkout-step-two.html/);
    await this.header.verifyPageTitle("Checkout: Overview");
  }

  async verifyProduct(productName: string): Promise<void> {
    await expect(this.el(CheckoutOverviewLocators.itemName)).toHaveText(productName);
  }

  async clickFinish(): Promise<void> {
    await this.el(CheckoutOverviewLocators.finishButton).click();
  }
}
