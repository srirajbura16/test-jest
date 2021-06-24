const calculator = require('./calculator');

test('add two number together', () => {
  expect(calculator.add(1, 1)).toBe(2);
  expect(calculator.add(55, 31)).toBe(86);
  expect(calculator.add(232, 451)).toBe(683);
});

// test('subtract two number together', () => {});

// test('multiply two number together', () => {});

// test('divide two number together', () => {});
