const express = require("express");
const router = express.Router();

// Import the database utility
const db = require("../database/db");
const { getSearchCount, search } = require("../utils");


// Route to perform a search based on query parameters
router.get("/search", async (req, res) => {
  try {
    const searchTerm = req.query.q;
    const offset = req.query.offset;
    const numItems = req.query.numitems;

    //Check if parameters exist
    if (searchTerm === undefined) {
      res.json({ error: "Missing search term" });
    }
    if (offset === undefined) {
      res.json({ error: "Missing offset" });
    }
    if (numItems === undefined) {
      res.json({ error: "Missing number of items" });
    }

    //Get the total number of search items for pagination
    let searchCount = await getSearchCount(searchTerm);

    //Get search items
    let searchResults = await search(searchTerm, numItems, offset);

    //Combine into a single object
    const results = {
      count: searchCount,
      data: searchResults,
    };
    res.json({ results });
  } catch (error) {
    console.error("Error while searching", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


// Route to fetch details of a specific product by ID
router.get("/product/:productID", async (req, res) => {
  try {
    const product = await db.query(
      `SELECT * FROM Product WHERE id=${req.params.productID}`
    );
    const comparison = await db.query(
      `SELECT * FROM Comparison WHERE product_id=${req.params.productID}`
    );
    const results = {
      product,
      comparison,
    };
    res.json({ results });
  } catch (error) {
    console.error(
      `Error fetching product with id:${req.params.productID}`,
      error
    );
    res.status(500).json({ error: "Internal Server Error" });
  }
});


// Route to compare details of a specific product by ID
router.get("/compare/:productID", async (req, res) => {
  try {
    const product = await db.query(
      `SELECT * FROM Product WHERE id=${req.params.productID}`
    );
    const comparison = await db.query(
      `SELECT * FROM Comparison WHERE product_id=${req.params.productID}`
    );
    const results = {
      product,
      comparison,
    };
    res.json({ results });
  } catch (error) {
    console.error(
      `Error fetching product with id:${req.params.productID}`,
      error
    );
    res.status(500).json({ error: "Internal Server Error" });
  }
});


module.exports = router, {search};
