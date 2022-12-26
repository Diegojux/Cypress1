describe("Bienvenido al Curso de Cypress_ Seccion 1",() =>{

    it("Mi primer Test -> Hola Mundo", () =>{

        cy.log("Hola Mundo...")
        
        cy.wait(4000)// viene en milisegundos
        
    })

    it("MI Segundo Test -> Campo Name", () =>{

        cy.visit("https://testingqarvn.com.es/prueba-de-campos-checkbox")

        cy.wait(4000)

        cy.get("#wsf-1-field-29").type("Diego") 
        cy.wait(1000)
        cy.get("#wsf-1-field-30").type("Juarez Esparza")
        cy.wait(1000)
        cy.get("#wsf-1-field-31").type("diego@gmail.com")
        cy.wait(1000)
        cy.get("#wsf-1-field-32").type("3314680270")
        cy.wait(1000) 
        cy.get("#wsf-1-field-33").type("Direccion 1")
        cy.wait(1000) 
        cy.get("#wsf-1-field-34").click()

        cy.wait(4000)

    })


}) //Cierre del describe