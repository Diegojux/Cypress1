/// <reference types="Cypress"/>

describe(" PageUp_PageDown ",() =>{

    it("Funcion PageUp", () =>{
        
        cy.visit("https://www.suplementosgym.com.mx/")
        cy.title().should('eq','SuplementosGYM! Tu mejor opción en Suplementos Alimenticios/Deportivos')
        cy.wait(4000)
       
        cy.get("#mce-EMAIL").type('{pageup}')
        cy.wait(4000)

        cy.get("#home-slider").type('{pagedown}') // '#' para los ID /navbar-user-drop
        cy.wait(4000)


    })

    it("Funcion PageDown", () =>{
       
        cy.visit("https://www.suplementosgym.com.mx/")
        cy.title().should('eq','SuplementosGYM! Tu mejor opción en Suplementos Alimenticios/Deportivos')
        cy.wait(1500)
        
        cy.get("#mce-EMAIL").type('{pagedown}')
        cy.wait(1500)


    })


})

