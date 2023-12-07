const express = require('express');
const router = express.Router();

// Import the database utility
const db = require('../database/db'); 



router.get('/', async (req, res) => {
  try {
    const products = await db.query('SELECT * FROM product LIMIT 50');
    res.json({products});
  } catch (error) {
    console.error('Error querying database:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


router.get('/search/:searchTerm', async (req, res) => {
  try {
    const searchResults = await db.query(`SELECT * FROM Product WHERE name LIKE '%${req.params.searchTerm}%' OR brand LIKE '%${req.params.searchTerm}%'`);
    res.json({ searchResults });

  } catch (error) {
    console.error('Error while searching', error);
    res.status(500).json({ error: 'Internal Server Error'});
  }
})



router.get('/product/:productID', async (req, res) => {
  try {
    console.log(req.params.productID)
    const product = await db.query(`SELECT * FROM Product WHERE id=${req.params.productID}`);
    const comparison = await db.query(`SELECT * FROM Comparison WHERE product_id=${req.params.productID}`);
    res.json({ product,comparison });
  } catch (error) {
    console.error(`Error fetching product with id:${req.params.productID}`, error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})

router.get('/compare/product_id', async (req, res) => {})


module.exports = router;
