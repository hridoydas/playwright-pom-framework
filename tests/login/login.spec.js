const { test } = require("@playwright/test");
const { LoginActions } = require("./loginActions");
const excelParse = require("../../utility/excelParse");

let email = excelParse.userDataSet[1].email;
let password = excelParse.userDataSet[1].password;

test.beforeEach(async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto("https://dev.projecturl.com/");
});

test.describe("::::: Login Test Scenarios :::::", () => {
  test("Login with valid test credentials", async ({ page }) => {
    const loginActions = new LoginActions(page);
    await loginActions.login(email, password);
  });
});
