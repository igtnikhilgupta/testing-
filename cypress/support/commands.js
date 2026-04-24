// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/// <reference types="cypress" />

Cypress.Commands.add('login', () => {
  cy.visit('https://staging.app.renofms.com/login')
  cy.get('input[name="email"]', { timeout: 10000 }).type(Cypress.env('username'))
  cy.get('input[type="password"]').type(Cypress.env('password'))
  cy.contains('button', 'Login').click()
  cy.url().should('not.include', 'signin') // verify login success
})

