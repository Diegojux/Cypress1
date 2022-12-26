/// <reference types="Cypress"/>

require('cypress-plugin-tab')
require('cypress-xpath')

describe("Referencias de ventanas o paginas",() =>{

    it("Funcion_charset", () =>{

        cy.visit("https://testsheepnz.github.io/index.html#the-number-game")
        cy.title().should('eq',"TestSheepNZ Resource Page")
        cy.wait(1500)

        //la siguiente funcion o ASSERT ayuda a verificar que las paginas acepten cierto tipo de contenido
        //En este caso que acepte la 'ñ', acentos, entre otros
        cy.document().should("have.property","charset").and('eq',"UTF-8")
        
        //el siguiente ASSERT o funcion evalua la pagina(URL) en la que estamos ya sea completa o una parte de ella

        cy.url().should('eq',"https://testsheepnz.github.io/index.html#the-number-game")
        cy.wait(1500)

        cy.url().should("include","index.html#the-number-game")
        
    })


})