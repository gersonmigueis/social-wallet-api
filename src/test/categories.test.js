const request = require('supertest');

const app = require('../app');

test('Listar todas as Categorias', () => {
  return request(app).get('/categories')
    .then((res) => {
      expect(res.status).toBe(200);
    });
});

test('Salvar Categoria', () => {
  return request(app).post('/categories/save')
    .send({ description: 'Carro' })
    .then((res) => {
      expect(res.status).toBe(201);
    });
});
