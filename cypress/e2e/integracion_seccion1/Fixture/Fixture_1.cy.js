/// <reference types="Cypress"/>

require('cypress-plugin-tab')
require('cypress-xpath')
require('@4tw/cypress-drag-drop') //npm install --save-dev @4tw/cypress-drag-drop

import 'cypress-file-upload' // npm install --save-dev cypress-file-upload

describe("Carga_Por_Fixture",() =>{

    before(function(){ //En la siguiente linea se manda a llamar el archivo

        cy.fixture('datos').then(function(data){ // se llama a la funcion y se crea la variable 'data'
            //Se utiliza la funcion 'globalThis'    
            globalThis.data=data


        })

                 
    })

   

    it("Test_1_Cargando_Desde_JSON", () =>{
        
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq',"ToolsQA")
        cy.wait(1500) 

        cy.get("#userName").should("be.visible").type(data.nombre)
        cy.wait(1500)

        cy.get("#userEmail").should("be.visible").type(data.email)
        cy.wait(1500)

        cy.get("#currentAddress").should("be.visible").type(data.dir1)
        cy.wait(1500)

        cy.get("#permanentAddress").should("be.visible").type(data.dir2)
        cy.wait(1500)

        cy.get("#submit").should("be.visible").click()


    })

  
})