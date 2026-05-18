# Cypress E2E Testing Project

## Overview

This repository contains Cypress end-to-end (E2E) tests for a public web application as part of the CSE482 Software Testing course (Terminal Lab – Spring 2026).

- **Name:** Jaisha Sohail
- **Registration No.:** FA22-BSE-207 (A)
- **Instructor:** Ms. Yella Mehroze
- **Semester:** 8th
- **Type:** Theory

## Folder Structure

- `cypress/e2e/` — All test spec files (organized by task)
- `cypress/support/` — Custom commands and support files

## How to Run the Tests

1. Install dependencies:
   ```bash
   npm install
   ```
2. Open Cypress Test Runner:
   ```bash
   npx cypress open
   ```
   or run headless:
   ```bash
   npx cypress run
   ```
3. Select a spec file to run the tests in the browser or view results in the terminal.

## Screenshots

Screenshots of passing tests are saved in the `cypress/screenshots/` folder after running tests.

## Task 1: UI Test Suite (Functional Testing)

- Login, navigation, and form tests for [SauceDemo](https://www.saucedemo.com)

## Task 2: Assertions, Aliases & Custom Commands

- Advanced Cypress features: assertions, aliases, custom commands, and hooks

## Troubleshooting & Notes

- If you encounter **page load timeouts** or intermittent failures, it may be due to SauceDemo's third-party scripts or network issues. Try running Cypress in a different browser (Edge/Firefox) or increase the `pageLoadTimeout` in your `cypress.config.js`.
- The "About" link in the navigation test is now checked for its `href` only, as the `target` attribute is not present.
- The login button is an `<input>` element, so assertions check the `value` attribute, not text content.
- If you see errors about multiple elements, the test has been updated to click only the first link in product items.
- If you see site-side JavaScript errors, they are ignored in the test setup for reliability.

## Reflection

See `cypress/e2e/reflection.md` for a summary of challenges and solutions encountered during this project.
