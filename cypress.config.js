const { defineConfig } = require("cypress");

module.exports = defineConfig({

  env: {
    username: 'navedshaikh@igtechso.com',
    password: 'Reno@1234'
  },


  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
