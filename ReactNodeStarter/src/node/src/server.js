const express = require('express');
const logger = require('./middleware/logging'); //import middleware here
const app = express();
require('./config/db');  // db connection if used, comment out if not
const userRoutes = require('./routes/userRoutes'); //define additional routes/constants here 

// Middlewares
app.use(express.json());  // Parse incoming requests with JSON payloads, alternatively app.use(express.static(staticPath))
app.use(logger);

// Routes
app.use('/users', userRoutes);

// Listen to port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});