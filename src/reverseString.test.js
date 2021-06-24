const reverseString = require('./reverseString');

test('reverse given string', () => {
  expect(reverseString('Mister')).toBe('retsiM');
  expect(reverseString('Coffee')).toBe('eeffoC');
  expect(reverseString('clip')).toBe('pilc');
});
