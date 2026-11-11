import { Locator, Page, expect } from "@playwright/test";
import { InventoryLocators } from "../locators/inventory.locators";
import { BasePage } from "./BasePage";

export class InventoryPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async expectLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(/inventory.html/);
    await this.header.verifyPageTitle("Products");
  }

  // Finds the product card that contains the given product name
  getProductCard(productName: string): Locator {
    return this.el(InventoryLocators.inventoryItem).filter({ hasText: productName });
  }

  async addProductToCart(productName: string): Promise<void> {
    const productCard = this.getProductCard(productName);
    await this.el(InventoryLocators.addToCartButton, productCard).click();
    await expect(this.el(InventoryLocators.removeButton, productCard)).toBeVisible();
  }
}
