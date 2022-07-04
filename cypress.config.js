const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/*.cy.js",
    supportFile: false,
  },
});
