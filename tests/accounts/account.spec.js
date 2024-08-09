const { test } = require('@playwright/test');
const { LoginActions } = require('../login/loginActions');
const { AccountActions } = require('./accountActions');
const { ExcelParse } = require('../../utility/excelParse');
const excelParse = new ExcelParse();

let email = excelParse.userDataSet[1].email;
let password = excelParse.userDataSet[1].password;

test.describe.serial('::::: Login & Create Account :::::', () => {
  let page;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto('/');
  });
  test('Login with valid credentials', async ({}) => {
    const loginActions = new LoginActions(page);
    await loginActions.login(email, password);
  });
  test('Create New Account', async ({}) => {
    const accountActions = new AccountActions(page);
    await accountActions.createAccount();
  });
});
