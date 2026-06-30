// @ts-check
const { defineConfig } = require('@playwright/test');

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// const dotenv = require('dotenv');
// const path = require('path');
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests',
  retries : 1,
  workers : 3,
  // Uncomment to run only one file with `npx playwright test` (no path in command):
 //  testMatch: '**/testCase03.spec.js',
  timeout: 40 * 1000,
  expect: {
    timeout: 50 * 1000,
  },
  reporter: 'html',
  use: {
    browserName: 'chromium',
    headless: false,
    screenshot: 'on',
    trace: 'retain-on-failure',
    viewport: null,
    launchOptions: {
      args: ['--start-maximized'],
    },
  },
});



