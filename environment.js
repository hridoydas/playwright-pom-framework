import { join } from "path";
export const ENVIRONMENT = {
  ENVIRONMENT: process.env.ENVIRONMENT || "DEV", // 'DEV', 'STAGING', 'PROD', 'PROD-EU'
  ENVIRONMENT_URL: getEnvironmentUrl(process.env.ENVIRONMENT),
  DATA_FILE_PATH: getEnvironmentDataFilePath(process.env.ENVIRONMENT),
};

if (!process.env.ENVIRONMENT) {
  console.log(
    "ENVIRONMENT not set, falling back to: ",
    ENVIRONMENT.ENVIRONMENT
  );
} else {
  console.log("ENVIRONMENT: ", ENVIRONMENT.ENVIRONMENT);
}

console.log("ENVIRONMENT_URL: ", ENVIRONMENT.ENVIRONMENT_URL);
console.log("DATA_FILE_PATH: ", ENVIRONMENT.DATA_FILE_PATH);

/**
 *
 * @param {string} environmentName
 * @returns
 */
function getEnvironmentUrl(environmentName) {
  switch (environmentName) {
    case "STAGING":
      return "https://staging.projecturl.com/";
    case "PROD":
      return "https://app.projecturl.com/";
    case "PROD-EU":
      return "https://app-eu.projecturl.com/";
    case "DEV":
    default:
      return "https://dev.projecturl.com/";
  }
}

function getEnvironmentDataFilePath(environmentName) {
  switch (environmentName) {
    case "STAGING":
      return join(__dirname, "resources/dataFile-staging.xlsx");
    case "PROD":
      return join(__dirname, "resources/dataFile-prod.xlsx");
    case "PROD-EU":
      return join(__dirname, "resources/dataFile-prod.xlsx");
    case "DEV":
    default:
      return join(__dirname, "resources/dataFile.xlsx");
  }
}
