import { defineConfig } from '@playwright/test';
import 'dotenv/config';

export default defineConfig({
  testDir: './',
  forbidOnly: false,
  fullyParallel: true,
  retries: process.env.CI ? 0 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: process.env.CI ? [['github'], ['list']] : 'list',

  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },

  use: {
    baseURL: process.env.BASE_URL,
    headless: process.env.CI ? true : false,
    ignoreHTTPSErrors: true,
    trace: 'on-first-retry',
    viewport: { width: 1000, height: 1000 },
    screenshot: 'only-on-failure',
  },
});
