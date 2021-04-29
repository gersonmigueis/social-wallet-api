const request = require('supertest');

const app = require('../app');

test('Salvar Transação', () => {
  return request(app).post('/transactions/save')
    .send({
      value: 50.50,
      type: 1,
      observation: 'Filtro de Ar',
      id_account: '666cf387-6d6b-4870-a4ad-3f080cefb558',
      id_category: '4b8b0c17-3dbd-48e8-801e-1acb1972c2c3',
    })
    .then((res) => {
      expect(res.status).toBe(201);
    });
});
