describe('Login kasirAja', () => {
    it('Login with valid data', () => {
        cy.visit('/')
        cy.contains('hai, kasirAja')

        cy.get('#email')
            .type('sanber_47@gmail.com')
            .should('have.value','sanber_47@gmail.com')
        cy.get('#password')
            .type('sanber123')
            .should('have.value','sanber123')
        cy.get('[type="submit"]').click()
            .should('have.text','login')

        cy.get('#root > div > div > div.css-tnxwfz > div > h3')
            .should('have.text','kasirAja') 
        cy.url().should('include', '/dashboard')
    })
})