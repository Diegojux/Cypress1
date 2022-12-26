import { Given, When, And } from "@badeball/cypress-cucumber-preprocessor";



Given('Abrir navegador principal',()=>{ 
    cy.visit("https://demoqa.com/text-box")

})

When('Cargando el nombre {word}',(Name)=>{ //parametrizado se agrega '{word}' y el valor de la constante entre parentesis
    cy.get("#userName").should("be.visible").type(Name)
    cy.wait(500)

})

When('Cargando el email',()=>{
    cy.get("#userEmail").should("be.visible").type(d_email)
    cy.wait(500)

})

And('Cargando la direccion {word}',(dir1)=>{//parametrizado
    cy.get("#currentAddress").should("be.visible").type(dir1)
    cy.wait(500)

})

Then('Validar nombre de la pagina',()=>{
    cy.title().should('eq',"ToolsQA")
    cy.wait(500)

})