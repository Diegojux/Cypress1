/// <reference types="Cypress"/>

require('cypress-plugin-tab')
require('cypress-xpath')
require('@4tw/cypress-drag-drop') //npm install --save-dev @4tw/cypress-drag-drop

import 'cypress-file-upload' // npm install --save-dev cypress-file-upload

describe("Navegacion_Cypress",() =>{

    it("Back_Forward", () =>{
        
        cy.visit("https://demoqa.com/")
        cy.title().should('eq',"ToolsQA")
        cy.wait(1500)
        
        cy.get(":nth-child(2) > :nth-child(1) > .avatar > svg").should("be.visible").click()
        cy.wait(1500)

        cy.get(":nth-child(1) > .group-header > .header-wrapper > .header-text").should("be.visible").click()
        cy.wait(1500)

        cy.get(":nth-child(1) > .element-list > .menu-list > #item-3 > svg").should("be.visible").click()
        cy.wait(1500)

        //nueva funcion de navegacion

        cy.go("back")
        cy.wait(1500)

        cy.go("back")
        cy.wait(1500)

        cy.go("forward")
        cy.wait(1500)

        cy.go("forward")
        cy.wait(1500)


    })

    it.only("Reto_Navegacion_RELOAD_Function", () =>{
        
        cy.visit("https://demoqa.com/")
        cy.title().should('eq',"ToolsQA")
        cy.wait(1500)
        
        cy.get(":nth-child(2) > :nth-child(1) > .avatar > svg").should("be.visible").click()
        cy.wait(1500)

        cy.get(":nth-child(1) > .group-header > .header-wrapper > .header-text").should("be.visible").click()
        cy.wait(1500)

        cy.get(":nth-child(1) > .element-list > .menu-list > #item-3 > svg").should("be.visible").click()
        cy.wait(1500)

        cy.get("#addNewRecordButton").should("be.visible").click()
        cy.wait(1500)

        cy.get("#firstName").should("be.visible").type("Marisela").tab().type("Alvarez Hernandez").tab().type("marisela@gmail.com").
        tab().type("33").tab().type("$50000").tab().type("Vial Inteligence").tab().click()
        cy.wait(1500)

        // Funcion de recarga

        cy.reload()
        cy.wait(2000)

        cy.go("back")



        
    })

  
})