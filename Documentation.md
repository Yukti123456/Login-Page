# SDLMS Login Automation with TestCafe

## Overview

This documentation provides an overview of the TestCafe automation project for the login and user authentication process of the SDLMS (Sample Deep Learning Management System) application. The project includes automated test cases, cross-browser testing, and documentation.

## Table of Contents

1. [Project Setup](#project-setup)
   - [Setting up the Environment](#setting-up-the-environment)
   - [Writing Automated Test Cases](#writing-automated-test-cases)

2. [Automated Test Cases](#automated-test-cases)
   - [Test 1: Successful Login](#test-1-successful-login)
   - [Test 2: Unsuccessful Login Attempts](#test-2-unsuccessful-login-attempts)
   - [Test 3: Error Message Validation](#test-3-error-message-validation)

3. [Cross-Browser Testing](#cross-browser-testing)

4. [Documentation](#documentation)
   - [Testing Approach](#testing-approach)
   - [Challenges Faced](#challenges-faced)
   - [Cross-Browser Testing Results](#cross-browser-testing-results)

## Project Setup

### Setting up the Environment

1. **Node.js Environment Setup:**
   - Ensure Node.js is installed on your system. If not, download and install it from [nodejs.org](https://nodejs.org/).
   - Verify the installation by running `node -v` and `npm -v` in your terminal.

2. **TestCafe Installation:**
   - Install TestCafe globally by running the following command in your terminal:
     ```
     npm install -g testcafe
     ```

### Writing Automated Test Cases

1. **Project Directory:**
   - Create a project directory for your TestCafe tests.

2. **JavaScript Test File:**
   - Inside your project directory, create a JavaScript file (e.g., `loginTests.js`) to write your test cases.

## Automated Test Cases

### Test 1: Successful Login

- Test Description: This test case validates successful login with valid credentials.
- Test Steps:
  1. Navigate to the SDLMS login page.
  2. Enter valid username and password.
  3. Click the login button.
- Expected Outcome:
  - User should be redirected to the dashboard screen.

### Test 2: Unsuccessful Login Attempts

- Test Description: This test case checks unsuccessful login attempts with invalid credentials.
- Test Steps:
  1. Navigate to the SDLMS login page.
  2. Enter invalid username and/or password.
  3. Click the login button.
- Expected Outcome:
  - User should not be able to log in successfully.

### Test 3: Error Message Validation

- Test Description: This test case validates that appropriate error messages are displayed for invalid login attempts.
- Test Steps:
  1. Navigate to the SDLMS login page.
  2. Enter invalid username and/or password.
  3. Click the login button.
- Expected Outcome:
  - Error messages should be displayed according to the application's behavior.

## Cross-Browser Testing

- Configure the TestCafe tests to run on at least two different browsers (e.g., Chrome and Firefox).
- Execute the test cases using the `testcafe` command, specifying the desired browsers.
- Verify that the processes work consistently across the chosen browsers.

## Documentation

### Testing Approach

- Provide insights into your testing approach, including the test cases, the rationale behind the test cases, and the overall testing strategy.

### Challenges Faced

- Document any challenges encountered during testing, such as difficulties in setting up the environment, handling dynamic elements, or unexpected behavior of the application.

### Cross-Browser Testing Results

- Share the results of your cross-browser testing.
- Note any discrepancies or differences in test outcomes between browsers.
- Include any observations or recommendations for cross-browser testing improvements.

## Conclusion

This documentation outlines the setup, test cases, and documentation process for automating SDLMS login and user authentication using TestCafe. Following this guide should help ensure the functionality of the login page remains intact while providing a consistent experience across different web browsers.
