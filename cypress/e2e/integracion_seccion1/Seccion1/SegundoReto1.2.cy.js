/// <reference types="Cypress"/>

require('cypress-plugin-tab')
require('cypress-xpath')

describe("Segundo Reto 1.2",() =>{

    it("Segundo_Reto_1.2 ", () =>{
        
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should('eq',"OrangeHRM")
        cy.wait(1500)

        //Ingresando. Con los Selectores recien aprendidos

        cy.xpath("//input[contains(@name,'username')]").should("be.visible").should("be.enabled").type("Admin")
        cy.xpath("//input[contains(@class,'oxd-input oxd-input--active')]").should("be.visible").should("be.enabled").type("admin123")
        cy.xpath("//button[contains(@type,'submit')]").should("be.visible").should("be.enabled").click()
        cy.wait(3000)

        //Agregar Nuevo registro

        cy.xpath("//button[@type='button'][contains(.,'Add')]").should("be.enabled").should("be.visible").click({force: true})
        cy.xpath("//input[@class='oxd-input oxd-input--active orangehrm-firstname']").should("be.enabled").should("be.visible").type("Diego").
           tab().type("Juarez").tab().type("Esparza").tab().tab().tab().click()
        cy.wait(6000)

        //Agregar Datos Extra al registro
        cy.xpath("//input[contains(@class,'oxd-input oxd-input--focus')]").should("be.enabled").should("be.visible").type("Diegojux").
           tab().type("326598")
           cy.xpath("(//i[contains(@class,'oxd-icon bi-calendar oxd-date-input-icon')])[1]").should("be.enabled").should("be.visible").select("30")
    /*
        //cy.xpath("").should("be.enabled").should("be.visible")



        //cy.xpath("").should("be.enabled").should("be.visible")
        //cy.xpath("").should("be.enabled").should("be.visible")
        

      */  


    })


})