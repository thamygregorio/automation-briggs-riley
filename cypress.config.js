const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1440,
  viewportHeight: 900,
  requestTimeout: 120000,
  defaultCommandTimeout: 120000,
  pageLoadTimeout: 120000,
  chromeWebSecurity: false,
  experimentalStudio: true,
  experimentalWebKitSupport: true,
  video: false,
  reports: false,
  screenshots: false,
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: "https://dev-briggs-riley.myshopify.com",
  },
});
