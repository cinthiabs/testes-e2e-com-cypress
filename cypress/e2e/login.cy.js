// <reference path="../support/commands.d.ts" />
describe('Login', () => {
  it('successfully logs in', () => {
    cy.intercept('GET', '**/notes').as('getNotes')
    cy.guiLogin()
    cy.wait('@getNotes',{timeout:2000})
    cy.contains('a', 'Create a new note').should('be.visible')
  })
})
