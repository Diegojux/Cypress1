/// <reference types="Cypress"/>



describe("Introduccion 'ASSERTS'_",() =>{

    it("Intro_ASSERTS", () =>{
        cy.visit("https://testingqarvn.com.es/campos-requeridos/")
        cy.title().should('eq','Campos Requeridos | TestingQaRvn')
        cy.wait(1500)

        cy.get("#wsf-1-field-95").should("be.visible").type("Marisela")
        cy.wait(1500)

        cy.get("#wsf-1-field-96").should("be.visible").type("Alvarez Hernandez")
        cy.wait(1500)

        cy.get("#wsf-1-field-97").should("be.visible").type("Marisela@gmail.com")
        cy.wait(1500)

        cy.get("#wsf-1-field-98").should("be.visible").should("be.enabled").type("3314680270")

    })


})