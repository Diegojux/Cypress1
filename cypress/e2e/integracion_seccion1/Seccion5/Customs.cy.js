/// <reference types="Cypress"/>

require('cypress-plugin-tab')
require('cypress-xpath')
require('@4tw/cypress-drag-drop') //npm install --save-dev @4tw/cypress-drag-drop

import 'cypress-file-upload' // npm install --save-dev cypress-file-upload

describe(" ",() =>{

    before(()=>{

        cy.log("#####Esto inicia antes que todo, solo una vez#####")

        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq',"ToolsQA")
        cy.wait(1500) 
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

    it("Comandos_Personalizados", () =>{
        
        cy.Texto_Visible("#userName","Marisela Alvarez")
        cy.Texto_Visible("#userEmail","marisela@gmail.com")
        cy.Texto_Visible_Xpath("//textarea[contains(@id,'currentAddress')]","Direccion 1")
        cy.Texto_Visible_Xpath("//textarea[contains(@id,'permanentAddress')]","Direccion 2")
        cy.Click_Normal("#submit")

    })

    it.only("Comandos_Personalizados_UnaSolaLinea", () =>{
        
        cy.TextBox_ToolsQA("Marisela Alvarez", "marisela@gmail.com", "Direccion 1", "Direccion2")
        

    })

  
})