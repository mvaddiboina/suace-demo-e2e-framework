// Every locator has a primary selector and a list of fallback selectors
export interface LocatorDefinition {
  description: string;
  primary: string;
  fallback: string[];
}
