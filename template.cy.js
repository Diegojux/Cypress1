/// <reference types="Cypress"/>

require('cypress-plugin-tab')
require('cypress-xpath')
require('@4tw/cypress-drag-drop') //npm install --save-dev @4tw/cypress-drag-drop

import 'cypress-file-upload' // npm install --save-dev cypress-file-upload

describe(" ",() =>{

    before(()=>{

        cy.log("#####Esto inicia antes que todo, solo una vez#####")

        cy.visit("")
        cy.title().should('eq',"")
        cy.wait(1500) 
    })

    beforeEach(()=>{
        cy.log("Esto se repite en cada uno de los test, MUY IMPORTANTE!!!")
    })

    afterEach(()=>{
        cy.log("Esto se hace al final de todos los test")
    })

    after(()=>{
        cy.log("########## Ultimo ciclo --- Final de Todo ##########")
    })

    it(" ", () =>{
        
        cy.visit("")
        cy.title().should('eq',"")
        cy.wait(1500) 


    })

  
})