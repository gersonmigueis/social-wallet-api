const request = require('supertest');

const app = require('../app');

test('Listar todas as contas', () => {
  return request(app).get('/accounts')
    .then((res) => {
      expect(res.status).toBe(200);
      expect(res.body.length).toBeGreaterThan(0);
    });
});

test('Salvar Conta', () => {
  return request(app).post('/accounts/save')
    .send({ name: 'Gerson' })
    .then((res) => {
      expect(res.status).toBe(201);
    });
});
