/// <reference types="Cypress"/>


require('cypress-plugin-tab')
require('cypress-xpath')

describe(" ",() =>{

    it("Reto_Asserts_Invoke", () =>{
        let a=20
        let b=25

        cy.visit("https://testsheepnz.github.io/BasicCalculator.html")
        cy.title().should('eq',"Basic Calculator")
        cy.wait(1500)

        cy.get("#number1Field").should("be.visible").and("have.class","element text medium").should("be.visible").type(a)//las variables se agregan sin comillas
        cy.wait(1500)
        cy.get("#number2Field").should("be.visible").and("have.class","element text medium").should("be.visible").type(b)
        cy.wait(1500)

        //cy.get("#calculateButton").and("have.class","btn btn-primary").click()
        cy.get("#calculateButton").invoke("attr","style","color:yellow")

    //Validando

        cy.get("#numberAnswerField").should("be.visible").invoke("attr","style","color:purple").then((e)=>{
            let res=e.text()
            cy.log(e.text())
            let r=a+b
            cy.log("El valor de r: "+ r)
            
            if(r==res){
                cy.log("Las respuestas son iguales!!!")
                }else{
                    cy.log("La respuesta es incorrecta")
                }

                if(r > 40){
                    a=a-5
                    b=b-5

                    //cy.get("#number1Field").should("be.visible").and("have.class","element text medium").should("be.visible").clear().type(a)//las variables se agregan sin comillas
                    cy.get("#number1Field").invoke("attr","name","number1").and("have.class","element text medium").clear().type(a)
                    cy.wait(1500)
                    cy.get("#number2Field").should("be.visible").and("have.class","element text medium").should("be.visible").clear().type(b)
                    cy.wait(1500)

                    cy.get("#calculateButton").and("have.class","btn btn-primary").click()

                }else{
                    a=a+5
                    b=b+5

                    cy.get("#number1Field").should("be.visible").and("have.class","element text medium").should("be.visible").clear().type(a)//las variables se agregan sin comillas
                    cy.wait(1500)
                    cy.get("#number2Field").should("be.visible").and("have.class","element text medium").should("be.visible").clear().type(b)
                    cy.wait(1500)

                    cy.get("#calculateButton").and("have.class","btn btn-primary").click()


                }
        })
       

        
        


    })


})