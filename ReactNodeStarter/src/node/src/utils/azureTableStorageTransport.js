// azureTableStorageTransport.js
const winston = require('winston');
const tableServiceClient = require('./storageConnection');

class AzureTableStorageTransport extends winston.Transport {
  constructor(options) {
    super(options);
  }

  async log(info, callback) {
    setImmediate(() => {
      this.emit('logged', info);
    });

    // Use the table service client
    const client = await tableServiceClient;

    // Prepare the entity
    const entity = {
      partitionKey: "LogEntry",
      rowKey: Date.now().toString(),
      level: info.level,
      message: info.message
    };

    const tableName = "loggingTable"; //Update table name for logging

    // Insert the entity into the table
    await client.getTableClient(tableName).createEntity(entity);

    callback();
  }
}

module.exports = AzureTableStorageTransport;
