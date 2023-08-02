// authService.js
const msal = require('@azure/msal-node');
const { DefaultAzureCredential } = require("@azure/identity");
const { SecretClient } = require("@azure/keyvault-secrets");

const authorityHostUrl = 'https://login.microsoftonline.us';
const tenantId = 'tenantId'; // Azure AD tenant ID
const clientId = 'clientId'; // Azure AD app's client ID
const authorityUrl = `${authorityHostUrl}/${tenantId}`;
const vaultUrl = "<key-vault-url>"; // Replace with your Azure Key Vault URL
const secretName = "<secret-name>"; // Replace with your Azure Key Vault secret name
const scope = 'https://dynamics365url/.default'; // The resource URL appended with '/.default'

// Prepare Azure Key Vault client
const credential = new DefaultAzureCredential();
const secretClient = new SecretClient(vaultUrl, credential);

// Function to acquire token
async function getAccessToken() {
  // Get clientSecret from Azure Key Vault
  const secretBundle = await secretClient.getSecret(secretName);
  const clientSecret = secretBundle.value;

  // Prepare MSAL config
  const config = {
    auth: {
      clientId: clientId,
      authority: authorityUrl,
      clientSecret: clientSecret
    },
    system: {
      loggerOptions: {
        loggerCallback(loglevel, message, containsPii) {
          console.log(message);
        },
        piiLoggingEnabled: false,
        logLevel: msal.LogLevel.Verbose,
      }
    }
  };

  // Initialize Confidential Client Application
  const cca = new msal.ConfidentialClientApplication(config);

  // Acquire token
  const tokenResponse = await cca.acquireTokenByClientCredential({ scopes: [scope] });

  return tokenResponse.accessToken;
}

module.exports = {
  getAccessToken,
};
