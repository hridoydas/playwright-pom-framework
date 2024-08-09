class Utility {
  constructor(page) {
    this.page = page;
    // this.utility = new Utility();
  }
  generateRandomText(size) {
    var length = size;
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }
}

module.exports = { Utility };
