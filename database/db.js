

const mysql = require('mysql2');

// Creating a MySQL connection pool
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Adekunle',
    database: 'priceComparison',
  connectionLimit: 10, 
});

// Function to execute SQL queries
function query(sql, params) {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        return reject(err);
      }

      connection.query(sql, params, (queryErr, results) => {
        connection.release(); // Releasing the connection

        if (queryErr) {
          return reject(queryErr);
        }

        resolve(results);
      });
    });
  });
}

module.exports = {
  query,
};