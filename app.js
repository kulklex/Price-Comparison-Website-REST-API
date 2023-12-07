// app.js

const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./controllers/routes');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/', routes); // Assuming your routes are in the 'routes' file and prefixed with '/api'

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
