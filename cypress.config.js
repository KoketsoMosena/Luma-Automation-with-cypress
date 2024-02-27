const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env:{
      "Base_URL": "https://magento.softwaretestingboard.com/",
    }
  },
});
