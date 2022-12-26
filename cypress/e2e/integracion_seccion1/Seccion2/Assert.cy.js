/// <reference types="Cypress"/>


require('cypress-plugin-tab')
require('cypress-xpath')

describe("Asserts",() =>{

    it("Assert_Contains", () =>{

        cy.visit("http://automationpractice.com/index.php")
        cy.title().should('eq',"My Store")
        cy.wait(2000)

        cy.get("#block_top_menu").contains("Women").click()
        cy.wait(1500)
        


    })

    it("Assert_find, eq", () =>{

        cy.visit("http://automationpractice.com/index.php")
        cy.title().should('eq',"My Store")
        cy.wait(2000)

        cy.get(".product-image-container").find(".product_img_link").eq(0).click() // En este ejemplo como no se enlista el producto como tal y esta por medio de una imagen
        // se empieza a rastrear por medio de las clases para posteriormente con la funcion 'eq' ver su posicion en el arreglo de la programacion que va de 0 a infinito y luego se le da click
               


    })

    it("Assert_Validando texto", () =>{

        cy.visit("http://automationpractice.com/index.php")
        cy.title().should('eq',"My Store")
        cy.wait(2000)

        cy.get(".product-image-container").find(".product_img_link").eq(3).click() // En este ejemplo como no se enlista el producto como tal y esta por medio de una imagen
        // se empieza a rastrear por medio de las clases para posteriormente con la funcion 'eq' ver su posicion en el arreglo de la programacion que va de 0 a infinito y luego se le da click
        
        cy.get("#product_condition .editable").then((x)=>{ //se buscan los elementos por 'id' por 'atributo' o por ambas y se hace una promesa donde se le da el parametro 'e' o el que desees al'then'
           // cy.log(e.text()) //si lo encuentra imprimira en consola la palabra que se encuentre en alguno de los atributos
            let estado=x.text()
           // cy.log(estado)
            if(estado=="New"){
                cy.log("El vestido es nuevo!!!")
            }

            
        })

        cy.get("#our_price_display").then((y)=>{ //se buscan los elementos por 'id' por 'atributo' o por ambas y se hace una promesa donde se le da el parametro 'e' o el que desees al'then'
            cy.log(y.text()) //si lo encuentra imprimira en consola la palabra que se encuentre en alguno de los atributos
            let precio =y.text()
            precio=precio.slice(1,3)//esta funcion te permite eliminar caracteres del arreglo que van de 0 a infinito 
            cy.log(precio)
             if(precio > "16.51"){
                 cy.log("No me ajusta :(")
                 cy.xpath("(//a[@href='http://automationpractice.com/index.php?id_category=3&controller=category'][contains(.,'Women')])[2]").click({force: true})
                 cy.wait(2000)

             }else if(precio <= "16.51"){
                cy.log("Me ajusta :)")
                cy.get("#add_to_cart").should("be.visible").click()
                cy.wait(1500) 
             }

               
             
        })
    })

    it("Assert_have.text_contain.text", () =>{

       cy.visit("https://es.wikipedia.org/wiki/Wikipedia:Portada") 
       cy.title().should('eq',"Wikipedia, la enciclopedia libre")
       cy.wait(1500)

       cy.get("#Artículo_destacado").should("have.text","Artículo destacado")// 'have.text' muestra todo el contenido del texto fijo
       cy.get("#Artículo_destacado").should("have.text","Artículo destacado")//'contain.text' puede mostrar solo un fragmento fijo


    })

    it("Assert_validate_contain", () =>{
        
       cy.visit("https://testingqarvn.com.es/campos-requeridos/")
       cy.title().should('eq',"Campos Requeridos | TestingQaRvn") 
       cy.wait(1500)

       cy.get("#wsf-1-field-95").should("be.visible").type("Marisela")
       cy.wait(1500)
       //'have.value' es para validar datos ingresados y NO fijos. y deberan coincidir en su totalidad
       //CUIDADO!!! Con la funcion 'contain' que identidfique que diga la palabra ingresada caracteres mas caracteres menos ejecutara la promesa
       cy.get("#wsf-1-field-95").should("have.value","Marisela").then(()=>{ //si se cumple, realiza la promesa
        
        cy.get("#wsf-1-field-96").should("be.visible").type("Alvarez Hernandez")
        cy.wait(1500)
        cy.get("#wsf-1-field-97").should("be.visible").type("Marisela@gmail.com")
        cy.wait(1500)
        cy.get("#wsf-1-field-98").should("be.visible").type("3314680270")
        cy.wait(1500)
        cy.get("#wsf-1-field-109").should("be.visible").click()


       })

             


    })

    it("Assert_have.class", () =>{
        
       cy.visit("https://testingqarvn.com.es/campos-requeridos/")
       cy.title().should('eq',"Campos Requeridos | TestingQaRvn") 
       cy.wait(1500)
        //OJO en las clases en ocasiones son mas de una separadas por un espacio
       cy.get("#wsf-1-field-95").should("be.visible").should("have.class", "wsf-field").then(()=>{

        cy.get("#wsf-1-field-95").should("be.visible").type("Marisela")
        cy.wait(1500)
       })



    })

    it("Assert_have.class_AND", () =>{
        
        cy.visit("https://testingqarvn.com.es/campos-requeridos/")
        cy.title().should('eq',"Campos Requeridos | TestingQaRvn") 
        cy.wait(1500)
         //OJO en las clases en ocasiones son mas de una separadas por un espacio
         //si no se cumplen ambas validaciones no realizara la 'promise'
        cy.get("#wsf-1-field-95").should("be.visible").and("have.class", "wsf-field").then(()=>{
 
         cy.get("#wsf-1-field-95").should("be.visible").type("Marisela")
         cy.wait(1500)
        })
 
 
 
     })

     it("Assert_have.length_css", () =>{

        cy.visit("https://comocreartuweb.com/curso-php-y-msql/las-bases-de-datos.html")
        cy.title().should('eq',"Las Bases de Datos MySql. Tutorial gratuito") 
        cy.wait(1500)
        
        cy.get("#cookieChoiceDismiss").should("be.visible").click()
        cy.wait(1500)

        cy.get("#textos  :nth-child(2) >td").should("be.visible").should("have.length", "16")


    })
 
    it.only("Assert_Contains_Por Inicio ", () =>{
        let time=5000

        cy.visit("https://store.sony.com.mx/")
        cy.get(".vtex-modal-layout-0-x-container").should("be.visible").click({force: true})
        cy.title().should('eq',"Sony Store México")
        cy.wait(time)

        cy.xpath("//img[contains(@class,'vtex-store-components-3-x-imageElement vtex-store-components-3-x-imageElement--write-review')]").should("be.visible").click()
        cy.contains("[type='button']","PreviousButton").should("be.visible")//.click()

        
    })

   
})