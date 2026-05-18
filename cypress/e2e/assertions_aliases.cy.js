// Task 2: Assertions, Aliases & Negative Assertions

describe('Assertions & Aliases Practice', () => {
  const baseUrl = 'https://www.saucedemo.com';

  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it('Assertion 1: Username input is visible', () => {
    cy.get('[data-test="username"]').should('be.visible');
  });

  it('Assertion 2: Login button has correct text', () => {
    cy.get('[data-test="login-button"]').should('have.attr', 'value', 'Login');
  });

  it('Assertion 3: Username input has correct attribute', () => {
    cy.get('[data-test="username"]').should('have.attr', 'placeholder', 'Username');
  });

  it('Negative Assertion: Error message not visible before login', () => {
    cy.get('[data-test="error"]').should('not.exist');
  });

  it('Alias Practice: Use alias for login button', () => {
    cy.get('[data-test="login-button"]').as('loginBtn');
    cy.get('@loginBtn').should('be.visible').and('have.attr', 'value', 'Login');
  });
});
