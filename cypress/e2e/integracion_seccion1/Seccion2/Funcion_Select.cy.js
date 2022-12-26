/// <reference types="Cypress"/>

require('cypress-plugin-tab')
require('cypress-xpath')

describe("Funcion_Select",() =>{

    it("Funcion_Select", () =>{

        cy.visit("https://testingqarvn.com.es/combobox-dependiente/")
        cy.title().should('eq',"ComboBox Dependiente | TestingQaRvn")
        cy.wait(1500)

        //un 'ASSERT' para validar se garega despues del select
        cy.get("#wsf-1-field-61").should("be.visible").select("Windows").should("have.value", "Windows")
        cy.wait(1500)

        cy.get("#wsf-1-field-61").should("be.visible").select("Mac").should("have.value", "Mac")
        cy.wait(1500)

        cy.get("#wsf-1-field-61").should("be.visible").select("Linux").should("have.value", "Linux")
        cy.wait(1500)         


    })

    it("Select_Autocompletar", () =>{
        
        cy.visit("https://www.google.com")
        cy.title().should('eq',"Google")
        cy.wait(1500) 
        
        cy.get("[name='q']").should("be.visible").type("supercar blondie").type("{enter}") // Para que de como un ¨ENTER¨ en el teclado(type({enter}))
        cy.wait(2000)
        
        cy.get(".MUFPAc > :nth-child(3) > a").should("be.visible").click()
        cy.wait(2000)


    })

    it("Funcion_Select_Multi-seleccion ", () =>{ //INCONCLUSO- - No hay pagina para probarlo
        
        cy.visit("https://mdbootstrap.com/docs/standard/extended/multiselect/")
        cy.title().should('eq',"Bootstrap Multiselect - free examples, templates & tutorial")
        cy.wait(1500)

        cy.get("##select-wrapper-572586 > .form-outline > .form-control").should("be.visible").select("One","Six","Five").then(()=>{
            cy.get("").should("be.visible").click()//PROMISE- - Funcion que al realizarse una da paso a otra como en un 'IF'
        })
        cy.wait(1500)

        // OJO - -No es necesario en ocasiones utilizar TODO el atributo o nombre de la clase o id, con una parte de el se puede ubicar y ejecutar
        // por el simple hecho de ser tan singular y que no va aparecer en alguna otra parte de la pagina como identificador


    })

    
})