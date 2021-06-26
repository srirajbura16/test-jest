function ceasarCipher(str, num) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let encrypted_str = '';

  str.split('').forEach((char) => {
    const char_index = alphabet.indexOf(char.toLowerCase());
    const new_index = char_index + num;
    const new_char = alphabet[new_index % 26];
    if (char === char.toUpperCase()) {
      encrypted_str += new_char.toUpperCase();
    } else {
      encrypted_str += new_char;
    }
  });
  console.log(encrypted_str);
  return encrypted_str;
}

module.exports = ceasarCipher;
