/// <reference types="Cypress"/>

require('cypress-plugin-tab')//Para activar la funcion 'TAB'

describe("Funcion_TAB",() =>{

    it("Funcion_TAB", () =>{
        
        cy.visit("https://testingqarvn.com.es/campos-requeridos/")
        cy.title().should('eq','Campos Requeridos | TestingQaRvn')
        cy.wait(1500)

        cy.get("#wsf-1-field-95").type("Diego").tab().type("Juarez Esparza").tab().type("diegoyukkaetho@gmail.com").tab().type("3314680270").tab().type("Mision del Bajio 1126")
        cy.wait(2000)


    })


})