describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.title().should('eq', 'Base Angular')
    cy.contains('Congratulations! Your app is running. 🎉')
  })
})
