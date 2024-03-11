const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 100000,
    pageLoadTimeout: 100000,
    //viewportWidth: 1280,
    //viewportHeight: 720,
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
     }, 
     specPattern: "cypress/e2e/step_definitions/*.feature",
     chromeWebSecurity: false
  },
});