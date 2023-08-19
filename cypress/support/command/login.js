Cypress.Commands.add('login', (email, password) => {
    cy.session([email, password], () => {
        cy.visit('/')
        cy.contains('hai, kasirAja')

        cy.get('#email')
            .type(email)
            .should('have.value','sanber_47@gmail.com')
        cy.get('#password')
            .type(password)
            .should('have.value','sanber123')
        cy.get('[type="submit"]').click()
            .should('have.text','login')

        cy.get('#root > div > div > div.css-tnxwfz > div > h3')
            .should('have.text','kasirAja') 
    }, 
    {
        cacheAcrossSpecs:true      
    })
})