/// <reference types="Cypress"/>

require('cypress-plugin-tab')

describe("PrimerReto ",() =>{

    it("PrimerReto ", () =>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should('eq', "OrangeHRM")
        cy.wait(1500)

        //Ingresar a la pagina

        cy.get("#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(2) > div > div:nth-child(2) > input").should("be.visible").type("Admin").tab()
        cy.get("#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(3) > div > div:nth-child(2) > input").should("be.visible").type("admin123").tab()
        cy.get("#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div.oxd-form-actions.orangehrm-login-action > button").click()
        cy.wait(3000)

        //Buscamos un empleado

        cy.get(".oxd-grid-4 > :nth-child(1)").should("be.visible").type("Alice")
        cy.get(".oxd-grid-4 > :nth-child(2)").should("be.visible").type("0221")
        cy.get(".oxd-form-actions > .oxd-button--secondary").should("be.visible").should("be.enabled").click({force: true})
        cy.wait(3000)
        cy.get(".oxd-button--ghost").should("be.visible").should("be.enabled").click({force: true})
        cy.wait(1500)

        //Agregar un empleado

        cy.get(".orangehrm-header-container > .oxd-button").click({force: true})
        cy.get(".--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input").should("be.visible").type("Marisela").tab().type("Alvarez").tab().type("Hernandez").tab()
          .tab().tab().tab().click()
        cy.wait(6000)
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList")
        //cy.get("#app > div.oxd-layout > div.oxd-layout-navigation > header > div.oxd-topbar-body > nav > ul > li.oxd-topbar-body-nav-tab.--visited > a").should("be.visible").should("be.enabled").click({force: true})
        cy.wait(6000)

        //Revisar y eliminar nuevo registro

        cy.get(".oxd-grid-4 > :nth-child(1)").should("be.visible").type("Marisela")
        cy.get(".oxd-grid-4 > :nth-child(2)").should("be.visible").type("0250")
        cy.get(".oxd-form-actions > .oxd-button--secondary").should("be.visible").should("be.enabled").click({force: true})
        cy.wait(3000)
        cy.get(".oxd-table-cell-actions > :nth-child(1) > .oxd-icon").click()
        cy.get(".oxd-button--label-danger").click()

        


    })


})