function analyze(array) {
  const min = Math.min(...array);
  const max = Math.max(...array);
  const length = array.length;
  const average = array.reduce((acc, val) => acc + val) / length;

  return {
    average,
    min,
    max,
    length,
  };
}

console.log(analyze([1, 8, 3, 4, 2, 6]));
