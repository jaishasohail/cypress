# Cypress E2E Testing Project

## Overview

This repository contains Cypress end-to-end (E2E) tests for a public web application as part of the CSE482 Software Testing course (Terminal Lab – Spring 2026).

- **Instructor:** Ms. Yella Mehroze
- **Batch:** FA22-BSE, Section A,B
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

- Login, navigation, and form tests for https://www.saucedemo.com

## Task 2: Assertions, Aliases & Custom Commands

- Advanced Cypress features: assertions, aliases, custom commands, and hooks

---

## Task 2 Reflection

_Add a short paragraph here describing one thing you found difficult and how you solved it._
