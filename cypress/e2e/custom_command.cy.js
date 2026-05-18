// Task 2: Using Custom Command and beforeEach

describe('Custom Command & beforeEach Demo', () => {
  beforeEach(() => {
    cy.login('standard_user', 'secret_sauce');
  });

  it('Should land on inventory page after login', () => {
    cy.url().should('include', '/inventory.html');
    cy.get('.title').should('have.text', 'Products');
  });

  it('Should add item to cart and see it in cart', () => {
    cy.get('.inventory_item').first().find('button').click();
    cy.get('.shopping_cart_link').click();
    cy.url().should('include', '/cart.html');
    cy.get('.cart_item').should('have.length.at.least', 1);
  });
});
