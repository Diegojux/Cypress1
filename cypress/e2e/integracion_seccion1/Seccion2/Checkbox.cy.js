/// <reference types="Cypress"/>

require('cypress-plugin-tab')
require('cypress-xpath')

describe("Checkbox ",() =>{

    it("Checkbox", () =>{

        cy.visit("https://testingqarvn.com.es/prueba-de-campos-checkbox/")
        cy.title().should('eq',"Prueba de campos Checkbox | TestingQaRvn")
        cy.wait(1500)

        cy.get("[name='field_29']").should("be.visible").type("Marisela").tab().type("Alvarez Hernandez").
           tab().type("marisela@gmail.com").tab().type("3314680270").tab().type("Mision del Bosque 1125 int 16")
        cy.wait(1500)

        cy.get("[id='wsf-1-label-36-row-2']").click() // Busqueda por atributo
        cy.wait(1500)
        
        cy.get("[id='wsf-1-label-36-row-2']").should("be.visible").click() //busqueda por atributo
        cy.wait(1500)

        cy.get("#wsf-1-field-34").should("be.visible").should("be.enabled").click()

        cy.get("[id='wsf-1-label-36-row-2']").click() // Busqueda por atributo
        cy.wait(1500)

    })

       // cy.get("#wsf-1-field-34").check().should("be.checked") -- Sirve para checar y validar
       // cy.get("#wsf-1-field-34").uncheck().should("not.be.checked") -- Para deschecar y validar que ya no este checado
    it.only("Checkbox por Selector ", () =>{
        
        cy.visit("https://testingqarvn.com.es/prueba-de-campos-checkbox/")
        cy.title().should('eq',"Prueba de campos Checkbox | TestingQaRvn")
        cy.wait(1500)

        cy.get("#wsf-1-label-36-row-1").click()// Por 'ID'
        cy.wait(1500)

        cy.xpath("//label[contains(@id,'wsf-1-label-36-row-1')]").click()
        cy.wait(1500)

        cy.get("#wsf-1-field-34").should("be.visible").should("be.enabled").click()
        cy.wait(1500)

         
        
    })    


    


})