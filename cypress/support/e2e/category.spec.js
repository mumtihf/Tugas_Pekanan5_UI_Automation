describe('Category Feature', () => {
    beforeEach(() => {
        cy.contains('kategori').click()
    })

    it('Hapus Kategori', () => {
        cy.get('#root > div > div > div.css-tnxwfz > div > a:nth-child(6) > div > div > div').click()
        cy.get('[class="chakra-button chakra-menu__menu-button css-pu8osu"]')
            .click() //Klik menu button

        cy.contains('hapus').click()
        cy.contains('Delete').click()
        
        //Assert Toast Message 
        cy.get('#chakra-toast-manager-top-right > li > div').invoke('text').then((resp) => {
            expect(resp).to.equal('successitem dihapus')
        })
        cy.wait(10000)
        cy.url().should('include','/categories')
    })
    
    it('Tambah Kategori', () => {
        cy.get('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > a')
            .click() //Klik button tambah

        cy.get('#nama')
            .type('Umum')
            .should('have.value','Umum')
            
        cy.contains('simpan').click()

        //Assert Toast Message 
        cy.get('#chakra-toast-manager-top-right > li > div').invoke('text').then((resp) => {
            expect(resp).to.equal('successitem ditambahkan')
        })
        cy.wait(10000)
        cy.url().should('include','/categories')
    })
})