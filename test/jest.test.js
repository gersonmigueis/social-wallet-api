test('Testando o Jest', () => {
  let number = null;
  expect(number).toBeNull();
  number = 10;
  expect(number).not.toBeNull();
  expect(number).toBe(10);
  expect(number).toEqual(10);
  expect(number).toBeGreaterThan(9);
  expect(number).toBeLessThan(11);
});

test('Testando com objetos', () => {
  const obj = { name: 'Gerson', mail: 'gerson@mail.com' };
  expect(obj).toHaveProperty('name', 'Gerson');
  expect(obj.name).toBe('Gerson');
});
