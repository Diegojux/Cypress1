class Proyecto1_PO{

    visitURL(){

        before(()=>{

            cy.log("#####Esto inicia antes que todo, solo una vez#####")
    
            cy.visit("https://demoqa.com/automation-practice-form")
            cy.title().should('eq',"ToolsQA")
            cy.wait(1500) 
        })
    }

    PracticeForm(nom, ap, email, phone){

        cy.get("#firstName").should("be.visible").type(nom)
        cy.wait(1500)

        cy.get("#lastName").should("be.visible").type(ap)
        cy.wait(1500)

        cy.get("#userEmail").should("be.visible").type(email)
        cy.wait(1500)

        cy.get("#userNumber").should("be.visible").type(phone)
        cy.wait(1500)

    }

    PracticeForm2(obj, address){

        cy.get("#subjectsContainer").should("be.visible").type(obj)

        cy.get("#hobbies-checkbox-2").check({force:true})
        cy.wait(1500)

        cy.get("#uploadPicture").attachFile('Back.PNG') // Las imagenes documentos y demas se cargaran en la carpeta FIXTURES del curso "'[type="file"]'"
        cy.wait(1200)

        cy.get("#currentAddress").should("be.visible").type(address)
        cy.wait(1500)

    }

}//Final

export default Proyecto1_PO; // Esta linea se agrega para poder ejecutar en los demas proyectos por mefio del nombre que le dimos