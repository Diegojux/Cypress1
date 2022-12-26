/// <reference types="Cypress"/>

require('cypress-plugin-tab')
require('cypress-xpath')
require('@4tw/cypress-drag-drop') //npm install --save-dev @4tw/cypress-drag-drop

import 'cypress-file-upload' // npm install --save-dev cypress-file-upload

describe("Manejo de los ALIAS",() =>{

    it("ALIAS_1", () =>{
        
        cy.visit("https://mdbootstrap.com/docs/standard/forms/input-group/")
        cy.title().should('eq',"Bootstrap Input group - examples & tutorial")
        cy.wait(1500) 

        cy.get("#section-basic-example > section.pb-4 > div > section > div:nth-child(1) > input").should("be.visible").as("nom")
        cy.get("@nom").type("Diegojux" , {force: true}) 
        cy.wait(1500)

        cy.get("#section-basic-example > section.pb-4 > div > section > div:nth-child(2) > input").should("be.visible").as("mail")
        cy.get("@mail").type("diegoyukkaetho@gmail.com", {force: true})
        cy.wait(1500)

        cy.get("#basic-url").should("be.visible").as("url")
        cy.get("@url").type("https://testingqarvn.com.es/", {force: true})
        cy.wait(1500)
    


    })


    it(" ", () =>{
        
        cy.visit("")
        cy.title().should('eq',"")
        cy.wait(1500) 


    })

  
})