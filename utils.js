// Import your database module
const db = require("./database/db")


/** Function that gets the total count of product from search term */
async function getSearchCount(searchTerm) {
    const sql = `SELECT COUNT(*) FROM Product WHERE name LIKE '%${searchTerm}%'`;
    let result = await db.query(sql);
    return result[0]["COUNT(*)"];
  }
  
/** Function that searches for product with search term */
 async function search(searchTerm, numItems, offset) {
    let sql = `SELECT * FROM Product WHERE name LIKE '%${searchTerm}%' `;
  
    //Limit the number of results returned
    if (numItems !== undefined && offset !== undefined) {
      sql += `LIMIT ${numItems} OFFSET ${offset}`;
    }
  
    return db.query(sql);
  }



module.exports = {getSearchCount, search}