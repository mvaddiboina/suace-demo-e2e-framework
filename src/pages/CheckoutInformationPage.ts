import { Page, expect } from "@playwright/test";
import { CheckoutInformationLocators } from "../locators/checkout.locators";
import { CustomerDetails } from "../types/testData.types";
import { BasePage } from "./BasePage";

// Checkout step one - "Checkout: Your Information"
export class CheckoutInformationPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async expectLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(/checkout-step-one.html/);
    await this.header.verifyPageTitle("Checkout: Your Information");
  }

  async fillCustomerDetails(customer: CustomerDetails): Promise<void> {
    await this.el(CheckoutInformationLocators.firstName).fill(customer.firstName);
    await this.el(CheckoutInformationLocators.lastName).fill(customer.lastName);
    await this.el(CheckoutInformationLocators.postalCode).fill(customer.postalCode);
  }

  async clickContinue(): Promise<void> {
    await this.el(CheckoutInformationLocators.continueButton).click();
  }

  async getErrorMessage(): Promise<string> {
    return this.el(CheckoutInformationLocators.errorMessage).innerText();
  }
}
