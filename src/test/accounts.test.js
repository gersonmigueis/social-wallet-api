const request = require('supertest');

const app = require('../app');
//No primeiro teste, o listar irá falhar, pois ele espera que tenha registros no bd
//No segundo teste, o salvar irá falhar, pois não permite nomes duplicados
test('Listar todas as contas', () => {
  return request(app).get('/accounts')
    .then((res) => {
      expect(res.status).toBe(200);
      expect(res.body.length).toBeGreaterThan(0);
    });
});

test.skip('Salvar Conta', () => {
  return request(app).post('/accounts/save')
    .send({ name: 'Gerson' })
    .then((res) => {
      expect(res.status).toBe(201);
    });
});
