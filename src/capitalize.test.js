const capitalize = require('./capitalize');

test('capitalize first character of word', () => {
  expect(capitalize('console')).toBe('Console');
  expect(capitalize('february')).toBe('February');
  expect(capitalize('rock')).toBe('Rock');
});
