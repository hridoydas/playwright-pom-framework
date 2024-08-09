// const { Utility } = require('../../utility/utilityActions');
class LoginActions {
  constructor(page) {
    this.page = page;
    // this.utility = new Utility();
    this.emailAddressInputField = page.locator("//input[@id='username']");
    this.passwordInputField = page.locator("//input[@id='password']");
    this.continueButton = page.locator(
      "(//button[contains(text(),'Continue')])[2]"
    );
    // this.tenant = page.locator("//p[contains(text(),'Zareen Test Tenant')]");
  }

  async navigation() {
    await this.page.goto("https://dev.projecturl.com/");
  }

  async enterEmail(email) {
    await this.emailAddressInputField.fill(email);
  }

  async enterPassword(password) {
    await this.passwordInputField.fill(password);
  }

  async clickOnContinueButton() {
    await this.continueButton.click();
  }

  async selectTenant() {
    await this.tenant.click();
  }

  // async clickOnSidebarArrowIcon() {
  //   await this.arrowIcon.hover();
  //   // (await (await this.selectDate(startDate)).isVisible()) == false
  //   if ((await this.arrowIcon.isVisible()) == true) {
  //     // await this.arrowIcon.click();
  //     console.log('Arrow icon visibled');
  //     await this.arrowIcon.click();
  //   } else if ((await this.arrowLogo.isVisible()) == true) {
  //     console.log('Arrow logo visible');
  //   } else {
  //     console.log('Nothing visible');
  //   }
  // }

  async login(email, password) {
    await this.enterEmail(email);
    await this.enterPassword(password);
    await this.clickOnContinueButton();
    // await this.selectTenant();
    // await this.clickOnSidebarArrowIcon();
  }
}

module.exports = { LoginActions };
