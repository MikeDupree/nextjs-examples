/**
 * Example Unit Test
 */
import exampleFunction from './example';

describe('Test example function', () => {
  it('Should return this is an example.', async () => {
    const response = await exampleFunction();
    expect(response).equal('This is an example');
  });
});
