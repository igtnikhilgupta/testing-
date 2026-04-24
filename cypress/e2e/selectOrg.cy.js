describe('Select Organization', () => {

    // Login runs before each test
    beforeEach(() => {
        cy.login()
    })

    // The actual test steps go inside an it() block
    it('Should select an organization', () => {
        cy.contains('Naved ki dukan').click()
    })

})
