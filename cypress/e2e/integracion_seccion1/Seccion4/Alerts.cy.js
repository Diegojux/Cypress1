/// <reference types="Cypress"/>

require('cypress-plugin-tab')
require('cypress-xpath')
require('@4tw/cypress-drag-drop') //npm install --save-dev @4tw/cypress-drag-drop

import 'cypress-file-upload' // npm install --save-dev cypress-file-upload

describe("Alerts",() =>{

    it("Alerta Uno", () =>{
        
        cy.visit("https://mdbootstrap.com/docs/standard/components/modal/")
        //cy.wait(5000)
        //cy.get(".andes-tooltip-button-close").click()
        cy.title().should('eq',"Bootstrap Modal - examples & tutorial")
        cy.wait(1500) 

        cy.get("#section-basic-example").click()
        cy.wait(1500)
        //Este paso es con el que se manejan los 'ALERTS' se gun la documentacion de la pagina
       /* cy.on("window:alert", (str)=>{
            expect(str).to.equal("Modal title")
            return true;
            })
            */
           cy.xpath("(//button[contains(@class,'btn-close')])[1]").click({force:true})

           //no pude cerrarlo desde 'SAVE CHANGES' ni por xpath ni nada
       

      
    })
})