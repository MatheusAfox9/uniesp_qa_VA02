const { defineConfig } = require("cypress");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature", // Define o padrão para os arquivos .feature
    setupNodeEvents(on, config) {
      // Configuração do plugin do Cucumber
      addCucumberPreprocessorPlugin(on, config);
      return config;
    },
  },
});
