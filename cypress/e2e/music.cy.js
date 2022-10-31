describe('the create song component', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-cy="title-input"]')
      .type('Cypress Test Song Title')
    cy.get('[data-cy="album-input"]')
      .type('Test Album')
    cy.get('[data-cy="artist-input"]')
      .type('Test Artist')
    cy.get('[data-cy="genre-input"]')
      .type('Test Genre')
    cy.get('[data-cy="release-date-input"]')
      .type('2022-10-31')

    cy.get('[data-cy="create-song"]')
      .click()

    cy.contains('Cypress Test Song Title').should('exist')
  })
})