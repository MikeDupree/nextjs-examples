/**
 * Example Integration/E2E Test
 */

/* eslint-disable testing-library/await-async-query */
describe('Homepage', () => {
  it('Pages should exist', () => {
    cy.visit('/');
    cy.title().should('eq', 'NextJS Examples');

    cy.get('.serverSideRendering').click();
    cy.location('pathname').should('eq', '/serverside-rendering');
    cy.title().should('eq', 'Serverside Rendering');

    cy.get('.staticGeneration').click();
    cy.location('pathname').should('eq', '/static-generation');
    cy.title().should('eq', 'Static Generation');

    cy.get('.dynamic').click();
    cy.location('pathname').should('eq', '/dynamic');
    cy.title().should('eq', 'Dynamic');

    cy.visit('/dynamic/0');
    cy.findByText('Welcome to the Dynamic Data App');

    cy.visit('/dynamic/1');
    cy.findByText('This is a second Dynamic Page');

    cy.visit('/dynamic/2');
    cy.findByText('This is a third Dynamic Page');
  });
});
