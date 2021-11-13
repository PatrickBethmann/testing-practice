function caeserCipher(string, valueToShift) {
  let result = [];
  let input = string.split('');

  for (let i = 0; i < input.length; i++) {
    result[i] = input[(i + valueToShift) % input.length];
  }

  return result.join('');
}

module.exports = caeserCipher;
