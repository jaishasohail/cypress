## Task 2 Reflection

One thing I found difficult was handling dynamic elements and waiting for the page to update after certain actions, such as logging in or navigating between pages. Sometimes, assertions would fail because the element was not yet visible or the page had not finished loading. I solved this by using Cypress's built-in retry-ability and by making sure to use commands like `cy.should('be.visible')` and `cy.url().should('include', ...)` to ensure the page state was correct before proceeding with further actions. This made my tests more reliable and less flaky.
