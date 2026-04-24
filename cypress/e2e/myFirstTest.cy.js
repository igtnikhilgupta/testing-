describe('My First Test', () => {
  it('test1', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    // cy.contains('type').click()
    // cy.url().should('include', '/commands/actions')
    // cy.get('.action-email').type('hello@cypress.io')
    cy.title().should('eq', 'OrangeHRM')
  })

  // it('negative testing', () => {
  //   cy.visit('https://opensource-demo.orangehrmlive.com/')
  //   cy.title().should('eq', 'OrangeHRM1234')
  // })
})