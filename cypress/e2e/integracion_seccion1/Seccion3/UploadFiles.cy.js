/// <reference types="Cypress"/>

require('cypress-plugin-tab')
require('cypress-xpath')


import 'cypress-file-upload' //npm install --save-dev cypress-file-upload  **comando para agregar plug in para subir archivos

//se agrega el import de arriba para activarlo

describe("UploadFiles",() =>{

    it("UploadFiles", () =>{
        
        cy.visit("https://testingqarvn.com.es/upload-files/")
        cy.title().should('eq',"Upload Files | TestingQaRvn")
        cy.wait(3000)

        cy.get("#wsf-1-field-80").should("be.visible").type("Marisela").tab().type("Alvarez Hernandez").tab().type("marisela@gmail.com").tab()
        .type("3314680270").tab().type("Direccion 1")
        cy.wait(2000)

        cy.get('[type="file"]').attachFile('Back.PNG') // Las imagenes documentos y demas se cargaran en la carpeta FIXTURES del curso
        cy.wait(2000)

        cy.get("#wsf-1-field-93").should("be.visible").click()


        
     })


})