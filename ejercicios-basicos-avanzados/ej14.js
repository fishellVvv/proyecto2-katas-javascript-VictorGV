const words = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code'
];

const repeatCounter = (list) => {
  const countedWords = {};
  for (const w of list) {
    if (!(w in countedWords)) {
        countedWords[w] = 0;
    }
    countedWords[w]++;
  }
  return countedWords;
}

console.log(repeatCounter(words))
