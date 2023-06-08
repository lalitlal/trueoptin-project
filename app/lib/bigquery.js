const { BigQuery } = require("@google-cloud/bigquery");

const keyFilename = "lalit-1-09cc1d815d37.json"; // Path to your service account key file
const projectId = "lalit-1"; // Your Google Cloud project ID

// Instantiate the BigQuery client
const bigquery = new BigQuery({
  projectId,
  keyFilename,
});

module.exports = bigquery;
