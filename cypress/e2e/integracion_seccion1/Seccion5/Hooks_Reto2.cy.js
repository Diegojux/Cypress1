/// <reference types="Cypress"/>

require('cypress-plugin-tab')
require('cypress-xpath')
require('@4tw/cypress-drag-drop') //npm install --save-dev @4tw/cypress-drag-drop

import 'cypress-file-upload' // npm install --save-dev cypress-file-upload

describe("Hooks_Reto2",() =>{

    before(()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should('eq',"OrangeHRM")
        cy.wait(1500) 

        cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").type("Admin").tab().type("admin123").tab().click()

    })

    after(()=>{

        cy.get(".oxd-userdropdown-tab > .oxd-icon").click()
        cy.wait(1500)  
        
        cy.get(":nth-child(4) > .oxd-userdropdown-link").click()
    })

    it("Reto_Hooks2_Prueba1", () =>{
        
        cy.get(":nth-child(1) > .oxd-main-menu-item").click()
        cy.wait(1000)

              
    })

   it("Reto_Hooks2_Prueba2", () =>{

        cy.get(":nth-child(5) > .oxd-main-menu-item > .oxd-text").click()
        cy.wait(1000)

              
    })

    it("Reto_Hooks2_Prueba3", () =>{
        
        cy.get(":nth-child(11) > .oxd-main-menu-item > .oxd-text").click()
        cy.wait(1000)

               
    })

  
})