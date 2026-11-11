import { Page, expect } from "@playwright/test";
import { CartLocators } from "../locators/cart.locators";
import { BasePage } from "./BasePage";

export class CartPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async expectLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(/cart.html/);
    await this.header.verifyPageTitle("Your Cart");
  }

  async verifyProductInCart(productName: string): Promise<void> {
    await expect(this.el(CartLocators.cartItem)).toHaveCount(1);
    await expect(this.el(CartLocators.itemName)).toHaveText(productName);
    await expect(this.el(CartLocators.itemQuantity)).toHaveText("1");
  }

  async clickCheckout(): Promise<void> {
    await this.el(CartLocators.checkoutButton).click();
  }
}
