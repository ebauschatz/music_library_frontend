describe('the create song component', () => {
  after(() => {
    cy.deleteSongByTitle('Cypress Test Song Title')
  })

  it('creates a new song record', () => {
    cy.visit('http://localhost:3000')
    cy.addSong('Cypress Test Song Title')
    cy.contains('Cypress Test Song Title').should('exist')
  })
})


describe('the song filter component', () => {
  before(() => {
    cy.addSong('Cypress Filter Test Song Title')
  })
  
  after(() => {
    cy.deleteSongByTitle('Cypress Filter Test Song Title')
  })

  it('finds the test song by title', () => {
    cy.get('[data-cy="filter-input"]')
      .type('Cypress Filter Test Song Title')

    cy.get('[data-cy="filter-button"]')
      .click()
    
    cy.get('[data-cy="table-song-title"]')
      .each(($el) => {
        expect($el.text()).contains('Cypress Filter Test Song Title')
      })
  })
})


describe('the delete button on a row', () => {
  before(() => {
    cy.addSong('Cypress Delete Test Song Title')
  })

  it('will remove a song', () => {
    cy.deleteSongByTitle('Cypress Delete Test Song Title')
    cy.contains('Cypress Delete Test Song Title').should('not.exist')
  })
})


describe('the edit button on a row', () => {
  before(() => {
    cy.addSong('Cypress Edit Test Song Title')
  })

  after(() => {
    cy.deleteSongByTitle('Cypress NEW Edit Test Song Title')
  })

  it('will allow changing the song title', () => {
    cy.contains('Cypress Edit Test Song Title')
      .parents('tr')
      .find('[data-cy="edit-button"]')
      .click()
    cy.get('[data-cy="edit-song-title"]')
      .clear()
      .type('Cypress NEW Edit Test Song Title')
    cy.get('[data-cy="save-edit-changes"]')
      .click()

    cy.contains('Cypress NEW Edit Test Song Title').should('exist')
  })
})

describe('POST /api/music/', () => {
  it('adds a song', () => {
    cy.request("POST", "http://127.0.0.1:8000/api/music/", {
      "title": "The Drapery Falls",
      "artist": "Opeth",
      "album": "Blackwater Park",
      "release_date": "2001-02-27",
      "genre": "awesome"
    })
      .then((response) => {
        expect(response.status).to.eq(201)
      })
  })
})