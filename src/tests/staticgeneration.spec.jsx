/**
 * Example Component Test
 */

/* eslint-disable testing-library/await-async-query */
import React from 'react';
import { mount } from '@cypress/react';
import StaticGeneration from '../pages/static-generation';

describe('Static Generation', () => {
  beforeEach(() => {
    cy.intercept('/api/revalidate?uri=/static-generation', {
      revalidated: true,
      uri: '/static-generation',
    }).as('revalidate');
    mount(<StaticGeneration />);
  });

  it('Should load the Static Generation Example', () => {
    cy.findByText('getStaticProps');
  });

  it('Should call revalidate endpoint', () => {
    cy.get('#revalidate').click();
    cy.wait(['@revalidate']).then((interception) => {
      assert.isTrue(interception.response.body.revalidated, 'revalidated is true');
      assert.equal(interception.response.body.uri, '/static-generation', 'uri should match');
    });
  });
});
