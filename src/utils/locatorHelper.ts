import { Locator, Page } from "@playwright/test";
import { LocatorDefinition } from "../locators/locator.types";

// Returns a locator that matches the primary selector OR any of the fallback selectors
export function getLocator(page: Page | Locator, element: LocatorDefinition): Locator {
  let locator = page.locator(element.primary);
  for (const selector of element.fallback) {
    locator = locator.or(page.locator(selector));
  }
  return locator; 
}
