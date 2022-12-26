/// <reference types="Cypress"/>

require('cypress-plugin-tab')
require('cypress-xpath')

describe("Comandos para consola ",() =>{

    it("Comandos_Consola ", () =>{

        //node_modules\.bin\cypress run
        //npx cypress run **Have lo mismo que el comando de arriba

        //npx cypress run --headed **Este hace que corran  todos los programas desde el navegador

        //npx cypress run --browser chrome    **Correr desde consola especificando el navegador

        //npx cypress run --spec "cypress\e2e\integracion_seccion1\Seccion2\RadioButtons.cy.js"  **Correr una prueba en especifico

        //npx cypress run --spec "cypress\e2e\integracion_seccion1\Seccion2\*" ** corre todas las pruebas de una carpeta o seccion agregando al final el asterisco o comodin
        
        
        


    })


})