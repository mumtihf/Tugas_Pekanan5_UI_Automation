describe('Produk Feature', () => {
    beforeEach(() => {
        cy.login("sanber_47@gmail.com","sanber123").then(() => {
            cy.visit('/')
            cy.contains('produk').click()
        })
    })
    it('Tambah Produk', () => {
        cy.get('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > a')
            .click() //Klik button tambah

        cy.get('#nama')
            .type('Test Produk')
            .should('have.value','Test Produk')

        cy.get('#deskripsi')
            .type('Ini adalah test produk')
            .should('have.value','Ini adalah test produk')
        
        cy.get('[id="harga beli"]')
            .type('10.000')
            .should('have.value','10.000')

        cy.get('[id="harga jual"]')
            .type('10.500')
            .should('have.value','10.500')

        cy.get('#stok')
            .type('10')
            .should('have.value','010')

        cy.get('#kategori').click()
        cy.get('[role="gridcell"').click()
        cy.contains('simpan').click()

        //Assert Toast Message
        cy.get('#chakra-toast-manager-top-right > li > div').invoke('text').then((resp) => {
            expect(resp).to.equal('successitem ditambahkan')
        })
    })
    
    it('Ubah Harga Jual Produk', () => {
        cy.get('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > table > tbody > tr > td:nth-child(10)')
            .scrollIntoView().click() //Scroll to menu button

        cy.contains('ubah').click()

        cy.get('[id="harga jual"]')
            .type('{selectall}{backspace}')
            .type('1060')
            .should('have.value','10.600')
            
        cy.contains('simpan').click()
        
        //Assert Toast Message 
        cy.get('#chakra-toast-manager-top-right > li > div').invoke('text').then((resp) => {
            expect(resp).to.equal('successitem diubah')
        })
    })
})
