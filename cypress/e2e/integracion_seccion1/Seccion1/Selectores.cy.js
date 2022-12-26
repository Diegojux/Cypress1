/// <reference types="Cypress"/>

require('cypress-plugin-tab')
require('cypress-xpath')

describe("Tipos de Selectores",() =>{

    it("Selector por 'id' ", () =>{
        
        cy.visit("https://testingqarvn.com.es/combobox/")
        cy.title().should('eq', "ComboBox | TestingQaRvn")
        cy.wait(1500)
        
        cy.get("#wsf-1-field-45").should("be.visible").should("be.enabled").type("Marisela")
        cy.get("#wsf-1-field-48").should("be.visible").should("be.enabled").type("3314680270") // herramienta mira de Cypress

    })

    it("Selector por 'Atributo' ", () =>{
        
        cy.visit("https://testingqarvn.com.es/combobox/")
        cy.title().should('eq', "ComboBox | TestingQaRvn")
        cy.wait(1500)
        
        cy.get("[placeholder='Nombre:']").should("be.visible").should("be.enabled").type("Marisela Alvarez Hernandez")//el atributo va entre corchetes y con comas simple
      

    })

    it("Selector por Xpath ", () =>{ //Con click derecha desde el navegador para obetener el Xpath
        
        cy.visit("https://testingqarvn.com.es/combobox/")
        cy.title().should('eq', "ComboBox | TestingQaRvn")
        cy.wait(1500)
        
        cy.xpath("//*[@id='wsf-1-field-45']").should("be.visible").should("be.enabled").type("Marisela Alvarez Hernandez")
        cy.wait(1500)
        cy.xpath("//input[contains(@id,'wsf-1-field-47')]").should("be.visible").should("be.enabled").type("Marisela@gmail.com")
        cy.wait(1500)
        cy.xpath("//textarea[contains(@name,'field_49')]").should("be.visible").should("be.enabled").type("Mision del Bajio 1125 int 16")
        
      

    })

    it("Selector por 'contains' ", () =>{ 
        
        cy.visit("https://testingqarvn.com.es/prueba-de-campos-checkbox/")
        cy.title().should('eq', "Prueba de campos Checkbox | TestingQaRvn")
        cy.wait(1500)
        
        cy.get(".wsf-label").contains("PHP").click()
        cy.get(".wsf-label").contains("PHP").click() // Para destildar la eleccion
        cy.wait(1500)
        cy.get(".wsf-label").contains("JS").click()
      

    })

    it.only("Selector por 'copy_selector' ", () =>{ 
        
        cy.visit("https://testingqarvn.com.es/prueba-de-campos-checkbox/")
        cy.title().should('eq', "Prueba de campos Checkbox | TestingQaRvn")
        cy.wait(1500)
        
        cy.get("#wsf-1-field-31").should("be.visible").should("be.enabled").type("marisela@gmailcom")  
      

    })


})