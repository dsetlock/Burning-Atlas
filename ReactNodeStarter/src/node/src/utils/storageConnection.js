// storageConnection.js is a module that exports a function that returns a promise that resolves to a TableServiceClient
const { DefaultAzureCredential } = require('@azure/identity');
const { TableServiceClient } = require("@azure/data-tables");
const { SecretClient } = require("@azure/keyvault-secrets");

const vaultUrl = process.env.KEY_VAULT_URL; 
const secretName = process.env.STORAGE_ACCOUNT_CONNECTION_STRING_SECRET_NAME;

const credential = new DefaultAzureCredential();
const secretClient = new SecretClient(vaultUrl, credential);

// IIFE to allow the use of `await` at the top level
const tableServiceClient = (async function() {
  const storageAccountConnectionString = await secretClient.getSecret(secretName);
  return new TableServiceClient(storageAccountConnectionString.value);
})();

module.exports = tableServiceClient;
