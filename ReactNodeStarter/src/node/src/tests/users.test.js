// testexample using Mocha, Chai, and Supertest against the /api/users endpoint
const app = require('../api/server'); // import your express app
const supertest = require('supertest');
const request = supertest(app);
const expect = require('chai').expect;

describe('GET /api/users', () => {
  it('should respond with an array of users', async () => {
    const response = await request.get('/api/users');

    // Check that the response status is 200
    expect(response.status).to.equal(200);
    
    // Check that the response body is an array
    expect(response.body).to.be.an('array');
    
    // Add more assertions as needed
  });
});
