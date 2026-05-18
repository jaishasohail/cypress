// Task 1: Navigation and Form Tests for https://www.saucedemo.com

// Ignore site-side JS errors that break Cypress
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Navigation & Form Tests - SauceDemo', () => {
  const baseUrl = 'https://www.saucedemo.com';

  beforeEach(() => {
    cy.visit(baseUrl, { timeout: 120000 });
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
  });

  it('Navigation Test 1: Click menu link', () => {
    cy.get('#react-burger-menu-btn').click();
    cy.get('.bm-item-list a').contains('About')
      .should('have.attr', 'href', 'https://saucelabs.com/');
    // Note: Cypress cannot follow new tab, so we check the link only
  });

  it('Navigation Test 2: Visit 2 pages in sequence', () => {
    cy.get('.inventory_item').first().find('a').first().click();
    cy.get('.inventory_details_name').should('be.visible');
    cy.go('back');
    cy.get('.title').should('have.text', 'Products');
  });

  it('Form Test 1: Add to cart and check cart', () => {
    cy.get('.inventory_item').first().find('button').click();
    cy.get('.shopping_cart_link').click();
    cy.url().should('include', '/cart.html');
    cy.get('.cart_item').should('have.length.at.least', 1);
  });
});
