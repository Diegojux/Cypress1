/// <reference types="Cypress"/>

require('cypress-plugin-tab')

describe("Opciones_Click",() =>{

    it("CLick_Sencillo", () =>{
        
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should('eq','OrangeHRM')
        cy.wait(1500)
        
        cy.get("#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(2) > div > div:nth-child(2) > input").should("be.visible").type("Admin").tab().type("admin123")
        cy.get(".oxd-button").should("be.visible").should("be.enabled").click()

        cy.get(".oxd-main-menu-search > .oxd-icon-button").should("be.visible").should("be.enabled").click()
        cy.get("#path-2").should("be.visible").click()
        cy.wait(2000)
        
        cy.get("#app > div.oxd-layout > div.oxd-layout-navigation > aside > nav > div.oxd-sidepanel-body > ul > li:nth-child(11) > a > svg").should("be.visible").click()

    })

    it("Click Forzado ", () =>{
        
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should('eq','OrangeHRM')
        cy.wait(1500)

        cy.get("#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(2) > div > div:nth-child(2) > input").should("be.visible").type("Admin").tab().type("admin123")
        cy.get(".oxd-button").should("be.visible").should("be.enabled").click({force: true})// <-Ese es la variante para forzar el 'click'


    })

    it.only("Click por coordenadas (x,y) ", () =>{
       
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should('eq','OrangeHRM')
        cy.wait(1500)

        cy.get("#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(2) > div > div:nth-child(2) > input").should("be.visible").type("Admin").tab().type("admin123")
        cy.get(".oxd-button").should("be.visible").should("be.enabled").click()

        cy.get(".oxd-userdropdown-tab").should("be.visible").click(30,30)
        


    })
})