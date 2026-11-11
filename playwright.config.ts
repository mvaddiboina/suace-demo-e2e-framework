import { defineConfig, devices } from "@playwright/test";
import { EnvConfig } from "./src/config/env.config";

/**
 * Environment is selected with the ENV variable (qa | stg | prod), default qa.
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: "./tests",
  outputDir: "./reports/test-results",
  timeout: 60_000,
  expect: { timeout: 10_000 },

  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  reporter: [
    ["list"],
    ["html", { outputFolder: "./reports/html-report", open: "never" }],
    ["junit", { outputFile: "./reports/junit/results.xml" }],
  ],

  use: {
    baseURL: EnvConfig.baseUrl,
    testIdAttribute: "data-test",
    headless: true,
    actionTimeout: 15_000,
    navigationTimeout: 30_000,
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },

  projects: [
    { name: "chromium", use: { ...devices["Desktop Chrome"] } },
    { name: "firefox", use: { ...devices["Desktop Firefox"] } },
    { name: "webkit", use: { ...devices["Desktop Safari"] } },
  ],
});
