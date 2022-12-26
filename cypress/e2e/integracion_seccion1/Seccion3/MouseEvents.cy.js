/// <reference types="Cypress"/>

require('cypress-plugin-tab')
require('cypress-xpath')
require('@4tw/cypress-drag-drop') //npm install --save-dev @4tw/cypress-drag-drop

import 'cypress-file-upload' // npm install --save-dev cypress-file-upload

describe("Eventos del Mouse",() =>{

    it("Drag_Drop", () =>{
        
        cy.visit("https://the-internet.herokuapp.com/drag_and_drop")
        cy.wait(1000)
        cy.title().should('eq',"The Internet")
        cy.wait(1000)

        cy.get("#column-a").drag("#column-b",{force:true})
        cy.wait(2000)


    })

    it("Drag_Drop_2", () =>{
        
        cy.visit("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")
        cy.wait(1000)
        cy.title().should('eq',"Demo 2: Drag and drop")
        cy.wait(1000)

        cy.get("#box7").drag("#box107",{force:true})
        cy.wait(1000)

        cy.get("#box6").drag("#box106",{force:true})
        cy.wait(1000)

        cy.get("#box3").drag("#box103",{force:true})
        cy.wait(1000)

        cy.get("#box1").drag("#box101",{force:true})
        cy.wait(1000)


    })

    it("MouseOver_trigger_invoke", () =>{
        cy.visit("http://automationpractice.com/index.php")
        cy.wait(1000)
        cy.title().should('eq',"My Store")
        cy.wait(1000)

        cy.contains("Dresses").trigger('mouseover',{force:true})
        cy.wait(1000)

        cy.contains("Evening Dresses").trigger('mouseover',{force:true}).click({force:true})
        cy.wait(4000)
        
        //invoke.("removeAttr","target").click ** Sirve para suprimir el que abra un apagina en otro lado. El atributo es Target:blank


    })

    it("Mouse_Slider", () =>{
        
        cy.visit("https://designsystem.morningstar.com/test/components/range-sliders.html")
        cy.wait(1000)
        cy.title().should('eq',"Range Sliders Test Page")
        cy.wait(1000)

        cy.get(".mds-container--dark-gray").invoke("attr","valuemax","60.0")//con el INVOKE buscamos cierto atributo al cual le modificamos el valor
        cy.wait(2000)

        cy.get(".mds-range-slider").invoke("attr","aria-valuenow","50.0")
        cy.wait(2000)


    })

    it.only("Mouse_Slider_2 ", () =>{
        
        cy.visit("http://bl.ocks.org/lewang/raw/830e00cbe735915fbe53/ccb3da71d3e42036545766a3798576a78ad70800/")
        cy.wait(1000)
        cy.title().should('eq',"Range Slider Test")
        cy.wait(1000)

        cy.get(".slider").invoke("attr","label-container","Label One")
        cy.wait(1000)

        cy.get(".slider").invoke("attr","label-container","Label Six")
        cy.wait(1000)

        cy.get(".slider").invoke("attr","label-container","Label Four")
        cy.wait(1000)
        


    })


})