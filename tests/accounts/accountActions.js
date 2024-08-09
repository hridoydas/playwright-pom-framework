const { expect } = require('@playwright/test');
const { Utility } = require('../../utility/utilityActions');
const { ExcelParse } = require('../../utility/excelParse');
const { TestCaseParse } = require('../../utility/testCaseParse');
let accName = '';
let currency = 'USD';
let index = '';
// let index = excelParse.
class AccountActions {
  constructor(page) {
    this.page = page;
    this.excelParse = new ExcelParse();
    this.testCaseParese = new TestCaseParse();
    this.utility = new Utility();
    index = this.testCaseParese.mercellTestDataSet[0].index;
    this.accountMenuIcon = page.getByTestId('menu-Accounts');
    this.createAccountButton = page.locator("//button[@data-testid='create-account-btn']");
    this.accNameInputField = page.locator("//input[@data-testid='account-company-name']");
    this.legalEntityDropdown = page.getByTestId('customSelect-defaultLegalEntityId');
    this.legalEntity = page.getByText('Disp 20', { exact: true });
    this.currencyDropdown = page.getByTestId('customSelect-defaultCurrency');
    this.SearchCurrencyField = page.getByPlaceholder('Search...');
    this.customIdInputField = page.getByPlaceholder('Enter Custom ID');
    this.accountLabel = page.getByPlaceholder('account label');
    this.SaveButton = page.getByRole('button', { name: 'Save' });
    // this.companyHeader = this.page.locator("//h2[contains(text(),'company')]");
  }

  async getCurrencyLocator(currency) {
    this.currency = this.page.getByText(`${currency}`, { exact: true });
    return this.currency;
  }

  async getCompanyLocator() {
    this.company = this.page.locator("//h2[contains(text(),'" + accName + "')]");
    return this.company;
  }

  async clickOnAccountMenu() {
    await this.accountMenuIcon.waitFor({ state: 'visible' });
    await this.accountMenuIcon.click();
  }

  async clickOnAccountCreateButton() {
    await this.createAccountButton.click();
  }
  async enterAccountName() {
    accName = 'Company_' + this.utility.generateRandomText(4);
    this.excelParse.accDataSet[index].account_name = accName;
    await this.accNameInputField.fill(accName);
  }

  async selectLegalEntity() {
    await this.legalEntityDropdown.click();
    await this.legatEntity.click();
  }

  async selectCurrency(currency) {
    await this.currencyDropdown.click();
    await this.SearchCurrencyField.fill(currency);
    await (await this.getCurrencyLocator(currency)).click();
  }

  async enterCustomerId() {
    let customerId = 'CUS_ID_' + this.utility.generateRandomText(3);
    this.excelParse.accDataSet[index].custom_id = customerId;
    await this.customIdInputField.fill(customerId);
  }

  async enterAccountLabel() {
    let accLabel = 'acc_lbl_' + this.utility.generateRandomText(3);
    this.excelParse.accDataSet[index].account_label = accLabel;
    await this.accountLabel.fill(accLabel);
  }

  async clickOnSaveButton() {
    await this.SaveButton.click();
  }

  async verifyCreatedAccount() {
    await expect(await this.getCompanyLocator()).toBeVisible();
  }

  async createAccount() {
    await this.clickOnAccountMenu();
    await this.clickOnAccountCreateButton();
    await this.enterAccountName();
    // await this.selectLegalEntity();
    await this.selectCurrency(currency);
    // await this.enterCustomerId();
    // await this.enterAccountLabel();
    await this.clickOnSaveButton();
    await this.verifyCreatedAccount();
  }
}

module.exports = { AccountActions };
