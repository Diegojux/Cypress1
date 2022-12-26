/// <reference types="Cypress"/>

require('cypress-plugin-tab')
require('cypress-xpath')
require('@4tw/cypress-drag-drop') //npm install --save-dev @4tw/cypress-drag-drop

import 'cypress-file-upload' // npm install --save-dev cypress-file-upload

describe(" ",() =>{

    before(()=>{

        cy.log("#####Esto inicia antes que todo, solo una vez#####")

        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq',"ToolsQA")
        cy.wait(2500) 
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

    it("Reto_Customs_UnaLinea_MaximoDos", () =>{

        cy.PracticeForm_ToolsQA_RetoCustoms("Marisela", "Alvarez Hernandez", "alvarez@hotmail.com", "3314680270", "1986 11 30", "Be the best, always!!!",
        "Mision del Bosque 1125 int. 16", "Uttar", "Agra")
        cy.wait(3000)

/
        //Lineas para validar textos de "alerta" "aviso" o "Error". Que irian despues de ejecutar alguna plantilla
        cy.get(".form-control.is-invalid, .was-validated .form-control:invalid").should("be.visible").then((val)=>{
            //se declara la variable por medio de una promesa para validar
            let dato=val.text()
            let mensaje= "x mensaje"
            cy.log(dato) // Si lo imprime es que si es visible para el usuario
            expect(dato).to.eq(mensaje)
            //Para hacerlo aun mas visible para el usuario
            if(dato == mensaje){
                cy.log("###################")
                cy.log("x dato no es valido") //nombre del campo: nombre, apellido, email, etc.
                cy.log("###################")

            }

        cy.Validar_Campos("Selector", "mensaje", "Nombre del campo") // Agregar los valores que salgan de la alerta para validar con el 'CUSTOM'

        })
        
         
    })

  
})