describe('Login Test', () => {
  it('Login', () => {

    cy.visit('https://staging.app.renofms.com/login')

    cy.get('input[name="email"]', { timeout: 10000 })
      .type(Cypress.env('username'))

    cy.get('input[type="password"]')
      .type(Cypress.env('password'))

    cy.contains('button', 'Login').click()

    cy.wait(5000) // debug

    cy.screenshot('after-login')

    cy.url().should('not.include', 'signin') // safer

  })
})