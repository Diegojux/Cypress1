/// <reference types="Cypress"/>

require('cypress-plugin-tab')
require('cypress-xpath')
require('@4tw/cypress-drag-drop') //npm install --save-dev @4tw/cypress-drag-drop

import 'cypress-file-upload' // npm install --save-dev cypress-file-upload

describe("Fechas_Dates",() =>{

    it("Fechas_Dates", () =>{

        cy.visit("https://testingqarvn.com.es/calendarios/")
        cy.title().should('eq',"Calendarios | TestingQaRvn")
        cy.wait(2000)

        cy.get("#wsf-1-field-79").should("be.visible").type("10/15/2022").click().tab().type("11/20/2011").tab().click() //mes/dia/año
              


    })


    it.only("Fechas_Dates_2", () =>{
        
        cy.visit("http://www.dhtmlgoodies.com/packages/dhtml-suite-for-applications/demos/demo-calendar-1.html")
        cy.title().should('eq',"Demo 1: Calendar")
        cy.wait(2000)

        cy.get("#calendarForForm > form > table > tbody > tr:nth-child(1) > td:nth-child(2) > input[type=text]").clear().type("2006-05-20").tab().
        tab().clear().type("2000-06-06").tab()
        


    })


})