/// <reference types="Cypress"/>

require('cypress-plugin-tab')
require('cypress-xpath')
require('@4tw/cypress-drag-drop') //npm install --save-dev @4tw/cypress-drag-drop

import 'cypress-file-upload' // npm install --save-dev cypress-file-upload


describe("SNIPPETS",() =>{

    it("SNIPPETS_", () =>{
        
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq',"ToolsQA")
        cy.wait(1500)

        /// Volver a practicar la creacion de snnipets porque no me los detecta
        // ruta: ctrl + p : para buscar donde crear los snippets para cualquier lenguaje
        

        
        
         


    })

  
})