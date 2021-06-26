const caesarCipher = require('./caesar-cipher');

test('', () => {
  expect(caesarCipher('hello', 5)).toBe('mjqqt');
  expect(caesarCipher('BlackWater', 5)).toBe('GqfhpBfyjw');
  expect(caesarCipher('code', 5)).toBe('htij');
  expect(caesarCipher('Tahiti', 5)).toBe('Yfmnyn');
});
