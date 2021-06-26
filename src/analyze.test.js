const analyze = require('./analyze');

test('returns data of array, such as min, max, average, and length', () => {
  expect(analyze([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });

  expect(analyze([1, 2, 3, 4])).toEqual({
    average: 2.5,
    min: 1,
    max: 4,
    length: 4,
  });
});
