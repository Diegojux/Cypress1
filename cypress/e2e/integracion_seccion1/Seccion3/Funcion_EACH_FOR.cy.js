/// <reference types="Cypress"/>

require('cypress-plugin-tab')
require('cypress-xpath')
require('@4tw/cypress-drag-drop') //npm install --save-dev @4tw/cypress-drag-drop

import 'cypress-file-upload' // npm install --save-dev cypress-file-upload

describe("Funcion _EACH_FOR",() =>{

    it("For_uno", () =>{

        for(let i=1; i<=10; i++){ //No olvidar declarar la variable

            cy.log("Número: " + i)
        }
              
    })

    it("For_dos", () =>{ // Tabla del 7

        for(let i=1; i<=10; i++){ //No olvidar declarar la variable
            let t=7
            cy.log(t + " X " + i +" = "+ t*i)

        }
              
    })

    it("EACH_ Uno_ Mosrar nombre de un producto de alguna pagina", () =>{
        
        cy.visit("http://automationpractice.com/index.php")
        cy.title().should('eq',"My Store")
        cy.wait(1500)

        cy.get(".product-name").each(($el, index, $list)=>{ //El EACH funciona como cuando inicias una promesa
            //Las siguientes lineas me enseñan lo que contiene cada parte del EACH
            //cy.log($el)
            //cy.log(index)
            cy.log($list)

            // cy.log($el.text()) //Me muestra el nombre del producto en especifico agregando el '.text()'

            //De esa forma sabemos que ya muestra lo que nos piden y solo imprimimos:

            let vestido=$el.text()
            cy.log(vestido)
        


        })


    })

    it("EACH_Dos_Hacer Click en el producto de un listado", () =>{
        
        cy.visit("http://automationpractice.com/index.php")
        cy.title().should('eq',"My Store")
        cy.wait(1500)

        cy.get(".product-name").each(($el, index, $list)=>{

            let vestido=$el.text()
            cy.log(vestido)

            if(vestido.includes("Printed Chiffon Dress")){
                cy.wrap($el).click()

            }

    })


    })

    it("Reto_EACH_FOR", () =>{
        
        cy.visit("http://automationpractice.com/index.php")
        cy.title().should('eq',"My Store")
        cy.wait(1500) 

        for(let x=0; x<=4; x++){

            cy.get("#center_column .product-name").eq(x).click({force:true}) //tuve que elegir el 'id' y una de las clases para que hiciera correctamente el ciclo
            cy.wait(1500)        
            cy.get("#quantity_wanted").type("4")
            cy.get(".exclusive > span").click()
            cy.get(".button-medium > span").click()
            cy.get(".logo").click()

        }
                  


    })

    it.only("Reto_EACH_FOR_Contar Datos Almacenados", () =>{
        
        cy.visit("http://automationpractice.com/index.php")
        cy.title().should('eq',"My Store")
        cy.wait(1500) 

        const datos=[]; //Declaro un arreglo

        cy.get("#center_column .product-name").each(($el, index, $list)=>{

            datos[index]=$el.text()
            //cy.log(datos.length)

        }).then(()=>{

            for(let x=0; x<=datos.length; x++){

            cy.get("#center_column .product-name").eq(x).click({force:true}) //tuve que elegir el 'id' y una de las clases para que hiciera correctamente el ciclo
            cy.wait(1500)        
            cy.get("#quantity_wanted").clear().type("4")
            cy.get(".exclusive > span").click()
            cy.get(".button-medium > span").click()
            cy.get(".logo").click()

        }


        })


     })

        

                         


  


})
