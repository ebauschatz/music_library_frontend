describe('the create song component', () => {
  it('creates a new song record', () => {
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

describe('the song filter component', () => {
  it('finds the test song by title', () => {
    cy.get('[data-cy="filter-input"]')
      .type('Cypress Test Song Title')

    cy.get('[data-cy="filter-button"]')
      .click()
    
    cy.get('[data-cy="table-song-title"]')
      .each(($el) => {
        expect($el.text()).contains('Cypress Test Song Title')
      })
  })
})

describe('the delete button on a row', () => {
  it('will remove a song', () => {
    cy.contains('Cypress Test Song Title')
      .parents('tr')
      .find('[data-cy="delete-button"]')
      .click()

    cy.contains('Cypress Test Song Title').should('not.exist')
  })
})