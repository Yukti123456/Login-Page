import { Selector } from 'testcafe';

// Define selectors for the username input, password input, and login button
const nameInput = Selector('#username');
const passwordInput = Selector('#password');
const loginButton = Selector('#login');

fixture('Login Tests')
  .page('https://dev.deepthought.education/login');

test('Successful Login', async (t) => {
  await t
    .maximizeWindow()
    .typeText(nameInput, 'yuktisahu_021') // Enter your username
    .typeText(passwordInput, 'yukti@123') // Enter your password
    .click(loginButton)
});
