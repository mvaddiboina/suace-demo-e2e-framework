import { Page, expect } from "@playwright/test";
import { HeaderLocators } from "../../locators/header.locators";
import { getLocator } from "../../utils/locatorHelper";

// Header shown on every page after login (title, cart icon, menu)
export class HeaderComponent {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async verifyPageTitle(title: string): Promise<void> {
    await expect(getLocator(this.page, HeaderLocators.pageTitle)).toHaveText(title);
  }

  async verifyCartCount(count: string): Promise<void> {
    await expect(getLocator(this.page, HeaderLocators.cartBadge)).toHaveText(count);
  }

  async verifyCartIsEmpty(): Promise<void> {
    await expect(getLocator(this.page, HeaderLocators.cartBadge)).toBeHidden();
  }

  async openCart(): Promise<void> {
    await getLocator(this.page, HeaderLocators.cartLink).click();
  }

  async logout(): Promise<void> {
    await getLocator(this.page, HeaderLocators.menuButton).click();
    await getLocator(this.page, HeaderLocators.logoutLink).click();
  }
}
