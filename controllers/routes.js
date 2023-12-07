const express = require('express');
const router = express.Router();

// Import the database utility
const db = require('../database/db'); 

router.get('/', async (req, res) => {
  try {
    const products = await db.query('SELECT * FROM product');

    res.json({products});
  } catch (error) {
    console.error('Error querying database:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
