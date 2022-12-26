/// <reference types="Cypress"/>

require('cypress-plugin-tab')
require('cypress-xpath')

describe("Segundo Reto ",() =>{

    it("Segundo_Reto", () =>{

        cy.visit("https://testingqarvn.com.es/calendarios/")
        cy.title().should('eq',"Calendarios | TestingQaRvn")
        cy.wait(1500)

        //Datos Personales
        cy.get("#wsf-1-field-66").should("be.visible").should("be.enabled").type("Marisela").tab().type("Alvarez Hernandez").
          tab().type("marisela@gmail.com").tab().type("3314680270").tab().type("Mision del Bosque 1125 int 16")
        cy.wait(1500)
        
        //Check Box
        cy.get("#wsf-1-label-71-row-1").click()
        cy.get("#wsf-1-label-72-row-2").click()
        cy.wait(1500)

        //Menu - - Nuevo
        cy.get("#wsf-1-field-73").select("Linux")
        cy.get("#wsf-1-field-75").select("Debian")
        cy.wait(1500)

        //Calendario y/o Fechas - - NUEVO
        cy.get("#wsf-1-field-79").should("be.enabled").should("be.visible").type("27/09/2022")
        cy.get("#wsf-1-field-78").should("be.enabled").should("be.visible").type("30/11/2022")
        cy.wait(1500)
     
        //Click al boton SUBMIT
        cy.get("#wsf-1-field-77").should("be.enabled").should("be.visible").click()
    
    

    })


})