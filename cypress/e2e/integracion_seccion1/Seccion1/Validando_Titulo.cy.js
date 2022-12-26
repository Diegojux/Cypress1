/// <reference types="Cypress"/>

describe("Validando el titulo_Seccion_1",() =>{

    it("Validando el Titulo ", () =>{
        
        cy.visit("https://testingqarvn.com.es/prueba-de-campos-checkbox")
        cy.title().should('eq','Prueba de campos Checkbox | TestingQaRvn')

        cy.log("El titulo es CORRECTO!!!!!")


    })


})