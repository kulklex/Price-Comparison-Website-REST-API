const mysql = require("mysql2");

// Creating a MySQL connection pool for the test
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Adekunle",
  database: "priceComparison",
  connectionLimit: 10,
});

// Test suite for the database connection
describe('Database Connection Tests', () => {
  // Test case: should establish a database connection
  it('should establish a database connection', (done) => {
    pool.getConnection((err, connection) => {
      // If there's an error, fail the test
      if (err) {
        done.fail(err);
        return;
      }

      // If the connection is successful, release the connection and pass the test
      connection.release();
      done();
    });
  });

});
