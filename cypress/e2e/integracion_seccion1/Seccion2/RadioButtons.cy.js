/// <reference types="Cypress"/>

require('cypress-plugin-tab')
require('cypress-xpath')

describe("Radio_Button",() =>{

    it("Radio_Button", () =>{
        
        cy.visit("https://testingqarvn.com.es/radio-buttons/")
        cy.title().should('eq',"Radio Buttons | TestingQaRvn")
        cy.wait(1500)

        cy.xpath("//label[contains(@id,'wsf-1-label-44-row-1')]").click()
        cy.wait(1500)

        cy.get("#wsf-1-label-44-row-1").click()
        cy.wait(1500)

        cy.get("#wsf-1-label-44-row-3").click()
        cy.wait(1500)

        cy.xpath("//button[contains(@id,'wsf-1-field-43')]").click()


    })


})