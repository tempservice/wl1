// Importing the 'express' module
const express = require('express');
const app = express();
const port = 3000;

// Sample data to be returned by the API
const data = {
  message: 'Hello, world!'
};

// GET endpoint at '/api'
app.get('/api', (req, res) => {
  res.json(data);
});

// Starting the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
