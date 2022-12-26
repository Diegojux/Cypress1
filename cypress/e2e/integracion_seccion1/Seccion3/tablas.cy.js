/// <reference types="Cypress"/>

require('cypress-plugin-tab')
require('cypress-xpath')
require('@4tw/cypress-drag-drop') //npm install --save-dev @4tw/cypress-drag-drop


import 'cypress-file-upload' // npm install --save-dev cypress-file-upload


describe("Elementos de una Tabla",() =>{

    it("Elementos de una Tabla", () =>{
        
        cy.visit("https://tomosmanga.com/")
        cy.title().should('eq',"Descargar Mangas y Comics en Español - Tomos Manga")
        cy.wait(1500) 

        cy.get("#primary-menu #menu-menu-principal").children("#menu-item-22").should("contain", "Manhwa").click()
        cy.wait(1500)

        cy.get("#primary-menu #menu-menu-principal").children("#menu-item-5389").should("contain", "Preguntas Frecuentes").click()
        cy.wait(1500)


    })

    it("Selecciona por medio de 'EQ'", () =>{
        
        cy.visit("https://www.rusogratis.com/")
        cy.title().should('eq',"Aprender Ruso Gratis - Cursos de lengua rusa, textos, vídeos…")
        cy.wait(3000)

        
        cy.get("[type='button']").eq("1").should("contain","Curso: Cómo leer ruso").click() // El 'eq' ayuda a identificar la posicion dentro de la tabla que va de 0 a N
        cy.wait(1500)

        cy.get("#ys_menu_0 > a").click()

        cy.get("[type='button']").eq("2").should("contain","Curso: Ruso básico").click() // El 'eq' ayuda a identificar la posicion dentro de la tabla que va de 0 a N
        cy.wait(1500)

        cy.get("#ys_menu_0 > a").click()

        cy.get("[type='button']").eq("3").should("contain","Curso: Casos rusos").click() // El 'eq' ayuda a identificar la posicion dentro de la tabla que va de 0 a N
        cy.wait(1500)



    })


    it("Seleccionar por medio de 'FILTER'", () =>{

        cy.visit("https://www.rusogratis.com/")
        cy.title().should('eq',"Aprender Ruso Gratis - Cursos de lengua rusa, textos, vídeos…")
        cy.wait(1500) 
        //tuve que agregar el 'FIRST' ya que me aparecian mas de 14 elementos con la misma clase del filtro
        cy.get("[type='button']").filter('.btn-primary').first("contain","Curso: Casos rusos").click({force:true})
        cy.wait(1500)

        cy.get("#ys_menu_0 > a").click()

        cy.get("[type='button']").filter('.btn-primary').first("contain","Curso: Cómo leer ruso").click({force:true})
        cy.wait(1500)

        cy.get("#ys_menu_0 > a").click()

        cy.get("[type='button']").filter('.btn-primary').first("contain","Curso: Ruso básico").click({force:true})
        cy.wait(1500)


        
    })


    it("Seleccionar por medio de 'FIND'", () =>{
        
        cy.visit("https://www.rusogratis.com/")
        cy.title().should('eq',"Aprender Ruso Gratis - Cursos de lengua rusa, textos, vídeos…")
        cy.wait(1500)
        
        cy.get(".csh-02").find(".btn-primary").should("contain","Curso: Cómo leer ruso")
        cy.wait(1500)

        cy.get("[type='button']").contains("Índice de los cursos")
        cy.wait(1500)


    })


    it("Seleccionar por medio de 'FIRST'", () =>{
        
        cy.visit("https://www.rusogratis.com/")
        cy.title().should('eq',"Aprender Ruso Gratis - Cursos de lengua rusa, textos, vídeos…")
        cy.wait(1500) 

        cy.get(".csh-02").find(".btn").first().should("contain","Índice de los cursos").click()
        cy.wait(1500)

        cy.get("#ys_menu_0 > a").click()
        //la funcion last te muestra el ultimo contenido de tu tabla
        cy.get(".csh-02").find(".btn").last().should("contain","Curso: Casos rusos").click()
        cy.wait(1500)


    })


    it("Seleccionar por medio de 'NextAll'", () =>{
        
        cy.visit("https://www.rusogratis.com/")
        cy.title().should('eq',"Aprender Ruso Gratis - Cursos de lengua rusa, textos, vídeos…")
        cy.wait(1500)
        
        //La siguiente funcion trabaja seleccionando un elemento de la tabla para posteriormete señalar el resto que la conforma. siempre y cuando este bien definida
        cy.get(".csh-02").find(".btn").should("contain","Vídeos: vocabulario y gramática").nextAll().should("have.length", 0)
        cy.wait(1500)


    })


    it.only("Seleccionar el elemento padre, funcion 'PARENT'", () =>{ ///video 140
        
       


    })


    it("Reto_Tablas", () =>{ // video 142, seleccionar todas las opciones y hacer check en todas
        
        cy.visit("")
        cy.title().should('eq',"")
        cy.wait(1500) 


    })


    it("Reto_Tablas_Con_FOR", () =>{ // video 143, seleccionar todas las opciones y hacer check en todas
        
        cy.visit("")
        cy.title().should('eq',"")
        cy.wait(1500) 


    })




})