// Import your search function

// Import your database module
const { search } = require('../utils');
const db = require('../database/db');

// Mock the database query function
jest.mock('../database/db', () => ({
  query: jest.fn(),
}));

describe('search function', () => {
  afterEach(() => {
    jest.clearAllMocks(); // Clear mock calls after each test
  });

  it('should generate correct SQL query and call db.query', async () => {
    const searchTerm = 'apple';
    const numItems = 10;
    const offset = 0;

    // Call the function
    await search(searchTerm, numItems, offset);

    // Checking if db.query is called with the correct SQL query
    expect(db.query).toHaveBeenCalledWith(
      `SELECT * FROM Product WHERE name LIKE '%${searchTerm}%' LIMIT ${numItems} OFFSET ${offset}`
    );
  });
});
