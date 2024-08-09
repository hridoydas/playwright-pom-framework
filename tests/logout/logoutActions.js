class LogoutActions {
  constructor(page) {
    this.page = page;
    this.profileMenuIcon = page.getByRole('link');
    this.logoutButton = page.getByRole('button', { name: 'Logout' });
  }

  async clickOnProfilIcon() {
    await this.profileMenuIcon.click();
  }

  async clickOnLogoutButton() {
    await this.logoutButton.click();
  }

  async logout() {
    await this.clickOnProfilIcon();
    await this.clickOnLogoutButton();
  }
}

module.exports = { LogoutActions };
