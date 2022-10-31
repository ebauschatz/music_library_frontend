Cypress.Commands.add('deleteSongByTitle', (songTitle) => {
    cy.contains(songTitle)
      .parents('tr')
      .find('[data-cy="delete-button"]')
      .click()
})

Cypress.Commands.add('addSong', (songTitle) => {
    cy.get('[data-cy="title-input"]')
      .type(songTitle)
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
})