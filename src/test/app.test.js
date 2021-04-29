const request = require('supertest');

const app = require('../app');

test('Server respondendo na raiz', () => {
  return request(app).get('/')
    .then((res) => {
      expect(res.status).toBe(200);
    });
});
