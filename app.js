const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");

// Import routes from controllers module
const routes = require("./controllers/routes");

// Enable CORS for all routes
app.use(cors());

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api", routes);

// Start the server
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


module.exports = server // exporting server