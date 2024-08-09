// @ts-check
// const login = './test/login';
const ONE_SEC = 1000;
const TEN_SEC = ONE_SEC * 10;
const THIRTY_SEC = TEN_SEC * 3;
const ONE_MIN = THIRTY_SEC * 2;
const TWO_MIN = ONE_MIN * 2;
const THIRTY_MIN = ONE_MIN * 30;
const { defineConfig, devices } = require("@playwright/test");

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  // testDir: './tests/testSpecs',
  /* Run tests in files in parallel */
  fullyParallel: true,
  timeout: TWO_MIN,
  globalTimeout: THIRTY_MIN,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: ONE_MIN,
  },
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    [
      "html",
      {
        outputFolder: "playwright-report",
        open: process.env.CI ? "never" : "on-failure",
      },
    ],
  ],
  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  outputDir: "test-results/",
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: "https://projecturl",
    // width: mex÷
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: {
      mode: "retain-on-failure",
      screenshots: true,
      snapshots: true,
      sources: true,
    },
    screenshot: "only-on-failure",
    video: "retain-on-failure",

    // storageState: join(__dirname, '../storageState.json'),
    // },
  },

  /* Configure projects for major browsers */
  projects: [
    {
      testDir: "./tests/testSpecs/", // Assuming your test files are in a 'tests' directory
      testMatch: ["tc14.spec.js"],
      name: "Chromium",
      use: {
        ...devices["Desktop Chrome"],
        // viewport: { width: 1633, height: 720 },
        // launchOptions: {
        //   args: ['--start-maximized'],
        // },
      },
    },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },
    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
