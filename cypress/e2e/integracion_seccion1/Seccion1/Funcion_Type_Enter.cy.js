/// <reference types="Cypress"/>

describe("Funcion Type & Enter",() =>{

    it("Funcion Type_Enter ", () =>{
        
        cy.visit("https://www.google.com/")
        cy.title().should('eq','Google')
        cy.log("Hasta aqui es correcto!!!!")
        cy.wait(1500)

        cy.get("[name='q']").type("drive {enter}" )

        cy.wait(1500)
        //tuve que usar el selector
        cy.get("#rso > div:nth-child(1) > div.g.Ww4FFb.vt6azd.tF2Cxc > div > div.Z26q7c.UK95Uc.jGGQ5e > div > a > h3").click() 

    })


})