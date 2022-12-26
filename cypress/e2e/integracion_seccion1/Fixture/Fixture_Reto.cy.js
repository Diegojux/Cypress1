/// <reference types="Cypress"/>

require('cypress-plugin-tab')
require('cypress-xpath')
require('@4tw/cypress-drag-drop') //npm install --save-dev @4tw/cypress-drag-drop

import 'cypress-file-upload' // npm install --save-dev cypress-file-upload

describe("Reto_MOCK_Excel",() =>{

    before(()=>{

        cy.log("#####Esto inicia antes que todo, solo una vez#####")

       
    })

    beforeEach(()=>{
        cy.log("Esto se repite en cada uno de los test, MUY IMPORTANTE!!!")
    })

    afterEach(()=>{
        cy.log("Esto se hace al final de todos los test")
    })

    after(()=>{
        cy.log("########## Ultimo ciclo --- Final de Todo ##########")
    })

    it("Fixture_Reto", () =>{
        
        ////cy.visit("https://demoqa.com/text-box")
        //cy.title().should('eq',"ToolsQA")
       //cy.wait(1500) 
        //El 'FIXTURE' datos2 es donde se pondran loas instrucciones entre corchetes y los datos que se escriben son llos que se modificaran solamente

        cy.fixture('ExcelToJSON').then(testdata =>{ // El fixture con las respectivas promesas es la que hara el bucle del programa es un FOR
            testdata.forEach(data => {
                const d_nombre = data.nombre
                const d_email = data.email
                const d_dir1 = data.dir1
                const d_dir2 = data.dir2

                cy.visit("https://demoqa.com/text-box")
                cy.title().should('eq',"ToolsQA")
                cy.wait(500)

                cy.get("#userName").should("be.visible").type(d_nombre) // los valores del 'type' se cambia por las constantes creadas
                cy.wait(500)

                cy.get("#userEmail").should("be.visible").type(d_email)
                cy.wait(500)

                cy.get("#currentAddress").should("be.visible").type(d_dir1)
                cy.wait(500)

                cy.get("#permanentAddress").should("be.visible").type(d_dir2)
                cy.wait(500)

                cy.get("#submit").should("be.visible").click()
                
            });

        })

        
    })

  
})