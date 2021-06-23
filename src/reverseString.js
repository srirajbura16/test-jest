function reverseString(string) {
  let reversed = '';
  for (let i = 0; i < string.length - 1; i++) {
    reversed += string[i];
  }
  return reversed;
}

module.exports = reverseString;
