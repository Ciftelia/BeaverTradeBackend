const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

// Middleware
app.use(cors());
app.use(express.json());

// Routes
// Get all names
app.get('/name', async (req, res) => {
  try {
    const allNames = await pool.query('select name from firsttable;');
    res.json(allNames.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

app.listen(4500, () => {
  console.log('Server is running on port 4500');
});