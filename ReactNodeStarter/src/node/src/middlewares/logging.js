//example middleware, logs the request method and url, express isn't being used here, but it could be
const express = require('express');

const logger = function (req, res, next) {
    console.log(`${new Date().toISOString()} - ${req.originalUrl}`);
    next();
}

module.exports = logger;
//providing example of how to use middleware, and reference in server.js