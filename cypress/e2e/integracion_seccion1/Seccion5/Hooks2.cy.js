/// <reference types="Cypress"/>

require('cypress-plugin-tab')
require('cypress-xpath')
require('@4tw/cypress-drag-drop') //npm install --save-dev @4tw/cypress-drag-drop

import 'cypress-file-upload' // npm install --save-dev cypress-file-upload

describe("Hooks",() =>{

    before(()=>{  //Antes de ir a la prueba hace estas instrucciones. OjO: Todas las pruebas se ejecutaran en esa misma pagina sin recargar el sitio
        cy.visit("https://demoqa.com/checkbox")
        cy.title().should('eq',"ToolsQA")
        cy.wait(1500) 
    })

    it("Hooks_Prueba1", () =>{

        cy.get(".rct-collapse > .rct-icon").click()
        cy.get("#tree-node-desktop").check({force:true}).should("be.checked")
        cy.wait(1500)
        
        
    })

    it("Hooks_Prueba2", () =>{

        cy.get("#tree-node-home").click({force:true})
        cy.wait(1500)
        cy.get("#tree-node-home").click({force:true})
        //cy.get("#tree-node-desktop").check({force:true}).should("be.checked")
        cy.wait(1500)
        
        
    })


    it("Hooks_Prueba3", () =>{

        //cy.get(".rct-collapse > .rct-icon").click()
        cy.get("#tree-node-desktop").check({force:true}).should("be.checked")
        cy.get("#tree-node-downloads").check({force:true}).should("be.checked")
        cy.wait(1500)
        
        
    })

  
})