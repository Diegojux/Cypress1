/// <reference types="Cypress"/>

require('cypress-plugin-tab')
require('cypress-xpath')
require('@4tw/cypress-drag-drop') //npm install --save-dev @4tw/cypress-drag-drop

import 'cypress-file-upload' // npm install --save-dev cypress-file-upload

describe(" ",() =>{

    it("Funcion_INVOKE_'Text'", () =>{
        
        cy.visit("https://testingqarvn.com.es/datos-personales/")
        cy.title().should('eq',"Datos Personales | TestingQaRvn")
        cy.wait(1500)
        
        cy.get("h2").invoke("text").as("info")
        cy.get("@info").should("contains","Datos Personales Básicos")
        cy.wait(1500)

        cy.get("#wsf-1-label-21").invoke("text").as("nom")
        cy.get("@nom").should("contain","Nombre:").then(()=>{

            cy.get("#wsf-1-field-21").type("Diego")

        })
        
        
      

    })


    it("Funcion INVOKE_'estilos'", () =>{
        
        cy.visit("https://testingqarvn.com.es/datos-personales/")
        cy.title().should('eq',"Datos Personales | TestingQaRvn")
        cy.wait(1500)
        
        cy.get("#wsf-1-label-22").invoke("attr","style","color:brown; font-size: 50px") //Cambias los atributos del texto que estas validando


    })


    it("Funcion INVOKE_'Mostrar y ocultar'", () =>{
        
        cy.visit("https://testingqarvn.com.es/datos-personales/")
        cy.title().should('eq',"Datos Personales | TestingQaRvn")
        cy.wait(1500)
        
        cy.get("#wsf-1-label-22").invoke("attr","style","color:brown; font-size: 50px") //Cambias los atributos del texto que estas validando
        cy.wait(1500)

        cy.get("#wsf-1-label-21").invoke("hide")
        cy.get("#wsf-1-field-21").invoke("hide")
        cy.wait(1500)
        
        cy.get("#wsf-1-label-21").invoke("show")
        cy.get("#wsf-1-field-21").invoke("show")
        cy.wait(1500)



    })

    it("Reto_INVOKE", () =>{
        
        cy.visit("https://testingqarvn.com.es/datos-personales/")
        cy.title().should('eq',"Datos Personales | TestingQaRvn")
        cy.get("#wsf-1-label-22").invoke("hide")
        cy.get("#wsf-1-field-22").invoke("hide")
        cy.wait(1500)
        
        cy.get("#wsf-1-label-21").invoke("text").as("nom")
        cy.get("@nom").should("contain","Nombre:").then(()=>{

            cy.get("#wsf-1-field-21").type("Diego")
            cy.wait(2000)

            cy.get("#wsf-1-label-22").invoke("show")
            cy.get("#wsf-1-field-22").invoke("show").wait(1500).type("Juarez")

        })             


    })


    it("INVOKE_SRC", () =>{ //Encontrar un elemento por medi del atributo SRC
        
        cy.visit("https://testingqarvn.com.es/datos-personales/")
        cy.title().should('eq',"Datos Personales | TestingQaRvn")
        cy.wait(1500)
        
        cy.get(".wp-image-230").should("be.visible").invoke("attr","src").should("include","Formularios.jpg")
        cy.wait(1500)


    })


    it.only("INVOKE_TARGET", () =>{//se busca eliminar cuando en cypress te redireccioanan a una nueva pagina lo cual no esta permitido
        
        cy.visit("https://www.vulnspy.com/dvwa/")
        cy.title().should('eq',"Damn Vulnerable Web Application (DVWA) | VULNSPY")
        cy.wait(1500) 

        cy.xpath("//a[contains(.,'https://github.com/vulnspy/DVWA')]").invoke("removeAttr", "target").click({force:true}) // Lo hace pero tengo que hacer modificaciones en SUPPORT


    })

  
})