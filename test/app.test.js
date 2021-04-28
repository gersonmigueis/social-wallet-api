const request = require('supertest');

const app = require('../src/app');

test('Server respondendo na raiz', () => {
  return request(app).get('/')
    .then((res) => {
      expect(res.status).toBe(200);
    });
});
