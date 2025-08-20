const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
];

function repeatCounter(param) {
    let result = {};

    for (let i = 0; i < param.length; i++) {
        let word = param[i];

        if (result[word] !== undefined) {
            result[word] = result[word] + 1;
        } else {
            result[word] = 1;
        }
    }
    return result;
}

// Ejemplo de uso:
console.log(repeatCounter(counterWords)); 