const request = require('supertest');

const app = require('../src/app');

test('Listar todas as contas', () => {
  return request(app).get('/accounts')
    .then((res) => {
      expect(res.status).toBe(200);
      expect(res.body).toHaveLength(0);
    });
});
