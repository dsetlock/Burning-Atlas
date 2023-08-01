//Logger utility for logging errors and info using Winston and Azure Table Storage
//Update table name in azureTableStorageTransport.js
const winston = require('winston');
const AzureTableStorageTransport = require('./azureTableStorageTransport');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    new AzureTableStorageTransport(),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple(),
  }));
}

module.exports = logger;