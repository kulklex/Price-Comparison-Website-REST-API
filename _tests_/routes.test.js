// routes.test.js
const request = require('supertest');
const app = require('../app');


// Test suite for the search route
describe('GET /search', () => {
  // Test case: should perform a search and return results
  it('should perform a search and return results', async () => {
    const response = await request(app).get('/api/search?q=apple&offset=0&numitems=10');
    expect(response.statusCode).toBe(200);
    expect(response.body.results).toBeDefined();
  });
});

// Test suite for the product details route
describe('GET /product/:productID', () => {
  // Test case: should fetch details of a specific product by ID
  it('should fetch details of a specific product by ID', async () => {
    const response = await request(app).get('/api/product/123');
    expect(response.statusCode).toBe(200);
    expect(response.body.results).toBeDefined();
  });
});

// Test suite for the product comparison route
describe('GET /compare/:productID', () => {
  // Test case: should compare details of a specific product by ID
  it('should compare details of a specific product by ID', async () => {
    const response = await request(app).get('/api/compare/456');
    expect(response.statusCode).toBe(200);
    expect(response.body.results).toBeDefined();
  });
});
