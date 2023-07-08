'use strict';
var path = require('path');
var express = require('express');

var app = express();

var staticPath = path.join(__dirname, '/');
app.use(express.static(staticPath));

// Allows you to set port in the project properties.
app.set('port', process.env.PORT || 3000);

/**
 * Starts the server and listens to incoming requests on the specified port.
 * Logs a message to the console when the server starts listening.
 */
var server = app.listen(app.get('port'), function () {
    console.log('listening');
});