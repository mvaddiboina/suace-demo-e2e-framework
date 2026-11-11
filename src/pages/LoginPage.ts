import { Page } from "@playwright/test";
import { LoginLocators } from "../locators/login.locators";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async goto(): Promise<void> { 
    await this.page.goto("/");
  }

  async login(userName: string, password: string): Promise<void> {
    await this.el(LoginLocators.username).fill(userName);
    await this.el(LoginLocators.password).fill(password);
    await this.el(LoginLocators.loginButton).click();
  }

  async getTheErrorMessage(): Promise<string> {
    return this.el(LoginLocators.errorMessage).innerText();
  }
}
