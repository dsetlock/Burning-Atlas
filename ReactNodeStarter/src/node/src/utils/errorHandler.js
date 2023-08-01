const tableServiceClient = require('./storageConnection');

async function logErrorToAzureTableStorage(error) {
  const date = new Date().toISOString();
  const errorEntry = {
    partitionKey: "Errors",
    rowKey: date,
    errorMessage: error.message,
    stack: error.stack
  };

  await tableServiceClient.createEntity("errorLogsTable", errorEntry); //update errorLogsTable to the name of your table
}

function handleError(err, req, res, next) {
  // Log the error to Azure Table Storage
  logErrorToAzureTableStorage(err).catch(console.error);

  res.status(500).json({ error: 'Something went wrong' });
}

module.exports = handleError;