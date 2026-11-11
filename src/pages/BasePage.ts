import { Locator, Page } from "@playwright/test";
import { LocatorDefinition } from "../locators/locator.types";
import { getLocator } from "../utils/locatorHelper";
import { HeaderComponent } from "./components/HeaderComponent";

// Parent class for all pages - holds the page and the common header
export class BasePage {
  page: Page;
  header: HeaderComponent;

  constructor(page: Page) {
    this.page = page;
    this.header = new HeaderComponent(page);
  }

  // Short helper to build a locator from a locator definition
  el(element: LocatorDefinition, parent?: Locator): Locator {
    return getLocator(parent ?? this.page, element);
  }
}
