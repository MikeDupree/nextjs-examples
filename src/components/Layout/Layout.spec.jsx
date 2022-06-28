// the cy.x fundtions are async but don't actually return a promise or work with await
/* eslint-disable testing-library/await-async-query */
import React from 'react';
import { mount } from '@cypress/react';
import Layout from './Layout';

describe('Layout Component', () => {
  beforeEach(() => {
    mount(<Layout>Test</Layout>);
  });

  it('Should load the layout component', () => {
    cy.findByText('Test');
    cy.findByText('Server Side Rendering');
    cy.findByText('Static Generation');
  });
});
