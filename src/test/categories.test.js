const request = require('supertest');

const app = require('../app');

//No primeiro teste, o listar irá falhar, pois ele espera que tenha registros no bd
//No segundo teste, o salvar irá falhar, pois não permite nomes duplicados
test('Listar todas as Categorias', () => {
  return request(app).get('/categories')
    .then((res) => {
      expect(res.status).toBe(200);
      expect(res.body.length).toBeGreaterThan(0);
    });
});
//não é permitido salvar categoria com o mesmo nome, corrigi isso manualmente no bd.
test.skip('Salvar Categoria', () => {
  return request(app).post('/categories/save')
    .send({ description: 'Carro' })
    .then((res) => {
      expect(res.status).toBe(201);
    });
});
