const calculator = require('./calculator');

test('add two number together', () => {
  expect(calculator.add(1, 1)).toBe(2);
  expect(calculator.add(55, 31)).toBe(86);
  expect(calculator.add(232, 451)).toBe(683);
});

test('add two number together', () => {
  expect(calculator.subtract(1, 1)).toBe(0);
  expect(calculator.subtract(55, 31)).toBe(24);
  expect(calculator.subtract(90, 22)).toBe(68);
});

test('add two number together', () => {
  expect(calculator.multiply(6, 2)).toBe(12);
  expect(calculator.multiply(10, 5)).toBe(50);
  expect(calculator.multiply(90, 3)).toBe(270);
});

test('add two number together', () => {
  expect(calculator.divide(6, 2)).toBe(3);
  expect(calculator.divide(10, 5)).toBe(2);
  expect(calculator.divide(90, 3)).toBe(30);
});
