const xlsx = require('node-xlsx');
// const path = require('path');
const excelFile = xlsx.parse(`${__dirname}/../resources/testCases.xlsx`);

const mercellTestSheet = excelFile.find((sheets) => sheets.name == 'Mercell');
const mercellTestSheetData = mercellTestSheet.data;

const mercellTestheader = mercellTestSheetData.shift();
const mercellTestdataSet = mercellTestSheetData.map((row) => {
  const mercell = {};
  row.forEach((data, index) => (mercell[mercellTestheader[index]] = data));
  return mercell;
});

class TestCaseParse {
  get mercellTestDataSet() {
    return mercellTestdataSet;
  }

  getHeaderDataCount(testName, headerName) {
    if (testName == 'mercell') {
      const headerColumnIndex = mercellTestheader.indexOf(headerName);
      if (headerColumnIndex !== -1) {
        console.log(`${headerName} column data found!`);
        return guestLoginDataSet.reduce((count, row) => (row[headerName] !== undefined ? count + 1 : count), 0);
      } else {
        throw new Error(`${headerName} column not found in the dataset.`);
      }
    }
  }
}

module.exports = { TestCaseParse };
