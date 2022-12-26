/*// 2-11 lineas que se agregaron para el cucumber

const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); //to access built-in plugins

const { defineConfig } = require ("cypress");

const addCucumberPreprocessorPlugin =
 require ("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;

const createEsbuildPlugin =
require ("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
*/
const { defineConfig } = require("cypress");// cabeza del cuerpo de las modificaciones.

module.exports = defineConfig({
  projectId: 'gfjm7h',
  pageLoadTimeout: 10000, // aqui modificamos el tiempo de carga de la pagina de 1 MIN a 10 segundos de espera
  defaultCommandTimeout: 15000,
  //testfiles: "**/*.feature", //Para el cocumber
  e2e: {

  /*  //Para ejecutar cucumber

    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],

      });  

      on("file:preprocessor", bundler);
        await addCucumberPreprocessorPlugin(on, config)
       // Make sure to return the config object as it might have been modified by the plugin.
        return config;
    },*/

    //specPattern: "cypress/e2e/integracion_seccion1/*.feature", // Para el cocumber
    //baseUrl: 'https://demoqa.com/text-box', 
    chromeWebSecurity: false, //se agrego esta linea para evitar el CROSS-ORIGIN ERROR que sucede cuando te redirecciona a otra pestaña
     
    
    setupNodeEvents(on, config) {
      // implement node event listeners here

      
      
    },

       

  }
  
  /*// agregue la coma para agregar lineas 56 - 59


  module: {
    rules: [{ test: /\.txt$/, use: 'raw-loader' }],
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })], */
  


     
   
});



















