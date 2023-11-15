const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    localUrl: "http://localhost:3000/",
    productionUrl: "",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
