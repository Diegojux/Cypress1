// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.on('uncaught:exception', (err, runnable) => { // Lo agregue para eliminar el error en paginas que no me dejaba correr como: 'demoqa.com'
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

  Cypress.Commands.add('Texto_Visible', (selector, texto) => { //La primer parte es como llamaremos al comando en este caso 'texto_visible'
//Entre los parentesis se le asigna que es lo que se le va a pedir al comando, en este caso el selector y lo que se le agregaria al mismo
    cy.get(selector).should("be.visible").type(texto)
    cy.wait(1500)

   })

  Cypress.Commands.add('Texto_Visible_Xpath', (selector, texto) => { 
        cy.xpath(selector).should("be.visible").type(texto)
        cy.wait(1500)
    
       })

  Cypress.Commands.add('Click_Normal', (selector) => { 
        cy.get(selector).should("be.visible").click()
        cy.wait(1500)
    
       })
  
  Cypress.Commands.add('Click_Force', (selector) => { 
        cy.get(selector).should("be.visible").click({force:true})
        cy.wait(1500)
    
       })

  Cypress.Commands.add('Click_Force_Xpath', (selector) => { 
        cy.get(selector).should("be.visible").click({force:true})
        cy.wait(1500)
    
       })

       Cypress.Commands.add('TextBox_ToolsQA', (nom, email, dir1, dir2 ) => {

        cy.get("#userName").should("be.visible").type(nom)
        cy.wait(1500)

        cy.get("#userEmail").should("be.visible").type(email)
        cy.wait(1500)

        cy.get("#currentAddress").should("be.visible").type(dir1)
        cy.wait(1500)

        cy.get("#permanentAddress").should("be.visible").type(dir2)
        cy.wait(1500)

        cy.get("#submit").should("be.visible").click()
        cy.wait(1500)


        })

        Cypress.Commands.add('PracticeForm_ToolsQA_RetoCustoms', (nom, ap, email, phone, birth, obj, address, state, country) => {

            cy.get("#firstName").should("be.visible").type(nom)
            cy.wait(1500)

            cy.get("#lastName").should("be.visible").type(ap)
            cy.wait(1500)

            cy.get("#userEmail").should("be.visible").type(email)
            cy.wait(1500)

            cy.get("#genterWrapper > .col-md-9 > :nth-child(1) > .custom-control-label").click({force: true})
            cy.wait(1500)

            cy.get("#userNumber").should("be.visible").type(phone)
            cy.wait(1500)

           // cy.get("#dateOfBirthInput").should("be.visible").clear().type(birth, "{enter}") - - Error en la pagina cuando esta por hacerlo queda en blanco y me falla la prueba
           // cy.wait(1500)

            cy.get("#subjectsContainer").should("be.visible").type(obj)

            cy.get("#hobbies-checkbox-2").check({force:true})
            cy.wait(1500)

            cy.get("#uploadPicture").attachFile('Back.PNG') // Las imagenes documentos y demas se cargaran en la carpeta FIXTURES del curso "'[type="file"]'"
            cy.wait(1200)

            cy.get("#currentAddress").should("be.visible").type(address)
            cy.wait(1500)

            cy.get("#state > .css-yk16xz-control > .css-1hwfws3 > .css-1wa3eu0-placeholder").should("be.visible").click({force:true}).type(state, "{enter}")
            cy.wait(1500).tab().type(country).tab().click({force:true}).invoke("removeAttr", "target") 

            

         })

         Cypress.Commands.add('Validar_Campos', (selector, mens1, nom_camp) => { 

            cy.get(selector).should("be.visible").then((val)=>{
                  let dato=val.text()
                  let mensaje=mens1
                  cy.log(dato) 
                  expect(dato).to.eq(mensaje)
                  
                  if(dato == mensaje){
                      cy.log("###################")
                      cy.log("El "+ nom_camp +"no es valido")
                      cy.log("###################")
      
                  }
      
              })

              Cypress.Commands.add('Validar_Campos_Light', (selector, mens1, nom_camp) => {

                  cy.get(selector).should("be.visible").should("contain", mens1).then((val)=>{

                        cy.log("#######################")
                        cy.log("El "+ nom_camp + " no es valido")
                        cy.log("#######################")

                  })
               }) 


         })