const { defineConfig } = require("cypress");
const { downloadfile } = require("cypress-downloadfile/lib/addPlugin") //cypress-downloadfile settings

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

      on('task', {downloadfile});

        },

      
        
      
  },
});


