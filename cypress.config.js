const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    baseUrl: 'https://notes-serverless-app.com',
    viewportWidthBreakpoint: 768,
    defaultCommandTimeout:30000,
    video:true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
