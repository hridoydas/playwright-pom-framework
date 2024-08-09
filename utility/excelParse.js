const xlsx = require('node-xlsx');
const { ENVIRONMENT } = require('../environment');

const excelFile = xlsx.parse(ENVIRONMENT.DATA_FILE_PATH);

const userInfoSheet = excelFile.find((sheets) => sheets.name == 'user_info');
const userInfoSheetData = userInfoSheet.data;

const headers = userInfoSheetData.shift();
const dataSet = userInfoSheetData.map((row) => {
  const user = {};
  row.forEach((data, index) => (user[headers[index]] = data));
  return user;
});

const accInfoSheet = excelFile.find((sheets) => sheets.name == 'account');
const accInfoSheetData = accInfoSheet.data;

const accHeader = accInfoSheetData.shift();
const accDataSet = accInfoSheetData.map((row) => {
  const accData = {};
  row.forEach((data, index) => (accData[accHeader[index]] = data));
  return accData;
});

const offerInfoSheet = excelFile.find((sheets) => sheets.name == 'offering');
const offerInfoSheetData = offerInfoSheet.data;

const offerHeader = offerInfoSheetData.shift();
const offerDataSet = offerInfoSheetData.map((row) => {
  const offerData = {};
  row.forEach((data, index) => (offerData[offerHeader[index]] = data));
  return offerData;
});

const quoteInfoSheet = excelFile.find((sheets) => sheets.name == 'quote');
const quoteInfoSheetData = quoteInfoSheet.data;

const quoteHeader = quoteInfoSheetData.shift();
const quoteDataSet = quoteInfoSheetData.map((row) => {
  const quoteData = {};
  row.forEach((data, index) => (quoteData[quoteHeader[index]] = data));
  return quoteData;
});

const productInfoSheet = excelFile.find((sheets) => sheets.name == 'products');
const productInfoSheetData = productInfoSheet.data;

const productHeader = productInfoSheetData.shift();
const productDataSet = productInfoSheetData.map((row) => {
  const productData = {};
  row.forEach((data, index) => (productData[productHeader[index]] = data));
  return productData;
});

class ExcelParse {
  get userDataSet() {
    return dataSet;
  }

  get accDataSet() {
    return accDataSet;
  }

  get offerDateSet() {
    return offerDataSet;
  }

  get quoteDataSet() {
    return quoteDataSet;
  }

  get productDataSet() {
    return productDataSet;
  }
}

module.exports = { ExcelParse };
