import Proyecto1_PO from '../../../support/PageObject/Proyecto1_PO.cy' // se agrega la ruta de donde traeremos nuestr PO en SUPPORT

/// <reference types="Cypress"/>

require('cypress-plugin-tab')
require('cypress-xpath')
require('@4tw/cypress-drag-drop') //npm install --save-dev @4tw/cypress-drag-drop

import 'cypress-file-upload' // npm install --save-dev cypress-file-upload

describe("Page_Objects_Models",() =>{
//creamos una constante con el nombre que queramos para llamar al PO en mi caso lo llame 'inicio'

    const inicio = new Proyecto1_PO()

//y se manda a llamar con el nombre de la constante mas un punto(.) y nos debe enlistar el PO que creamos

    inicio.visitURL()

       
    it.only("PracticeForm_PO", () =>{
        
       inicio.PracticeForm("Marisela", "Alvarez", "alesiram@gmail.com", "3314680270")
       cy.Validar_Campos_Light("selector", "mens1", "nom_camp") // Si ocupamos validar algun campo seleccionamos nuestro comando previamente hecho
        cy.wait(1500)

    })

    it("PracticeForm2_PO", () =>{
        
        inicio.PracticeForm2("Be the best!!!!", "Mision del bosque 1125 int 16")
 
 
     })

  
})