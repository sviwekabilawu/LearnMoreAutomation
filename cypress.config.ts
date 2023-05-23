import { defineConfig } from "cypress";
import { beforeRunHook, afterRunHook } from 'cypress-mochawesome-reporter/lib'
//const allureWriter = require('@shelex/cypress-allure-plugin/writer');
export default defineConfig({
  env: {
    qa: 'qa',
    dev: 'dev',
  },
  retries: 0,
  projectId: 'p5wetj',
  defaultCommandTimeout: 120000,
  video: true,
  numTestsKeptInMemory: 0,
  screenshotsFolder: 'Cypress/screenshots',
  trashAssetsBeforeRuns: true,
  chromeWebSecurity: false,
  viewportWidth: 1200,
  viewportHeight: 680,
  e2e: {
    setupNodeEvents(on, config) {
      on('before:run', async (details) => {
        console.log('override before:run');
        await beforeRunHook(details);
      });
      on('after:run', async () => {
        console.log('override after:run');
        await afterRunHook();
      });
    return config;
    },
    specPattern: 'cypress/e2e/**/*.{feature,features,jsx,ts}',
    experimentalOriginDependencies: true
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'FrontLine App Test Automation Reporting',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
});
