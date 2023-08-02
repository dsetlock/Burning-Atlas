const express = require('express');
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const path = require('path');
const logger = require('./middleware/logging'); //import middleware here
const app = express();
require('./config/db');  // db connection if used, comment out if not
const userRoutes = require('./routes/userRoutes'); //define additional routes/constants here 
const errorHandler = require('./utils/errorHandler');
const logger = require('./utils/logger');
const accountsRouter = require('./routes/accounts');

// Load environment variables from .env file
require('dotenv').config();

// Middlewares
app.use(express.json());  // Parse incoming requests with JSON payloads, alternatively app.use(express.static(staticPath))
app.use(logger);
app.use('/api/accounts', accountsRouter);
app.use(errorHandler);

// JWT middleware for validating access tokens
const jwtCheck = jwt({
    secret: jwksRsa.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: `https://login.microsoftonline.us/${process.env.TENANT_ID}/discovery/v2.0/keys`,
    }),
    audience: process.env.API_AUDIENCE,
    issuer: `https://login.microsoftonline.us/${process.env.TENANT_ID}/v2.0`,
    algorithms: ['RS256'],
  });

// Apply JWT middleware to all routes

app.use(jwtCheck);  
// Routes
app.use('/users', userRoutes);

app.get('/api/data', (req, res) => {
    // Protected data
    res.json({ data: 'protected data' });
  });
  

// Listen to port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  logger.info(`Server is running on port ${port}`);
});

module.exports = app;