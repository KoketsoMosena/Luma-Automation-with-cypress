describe('template spec', () => {// this is basicaly you feature Name
  it('passes', () => {//this is basically your Scenario
    cy.visit(Cypress.env('Base_URL'))//accessing the baseurl as a global enviroment
  })
})