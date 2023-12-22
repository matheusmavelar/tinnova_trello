const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env:{
    api_trello: 'https://api.trello.com'
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
