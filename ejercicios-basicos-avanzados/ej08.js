const avengers = [
  "Hulk",
  "Thor",
  "Iron Man",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

const findLongestWord = (stringList) => {
  let longest = 0;
  for (let i = 0; i < stringList.length; i++) {
    if (stringList[i].length > stringList[longest].length) {
        longest = i;
    }    
  }
  return stringList[longest];
}

console.log(findLongestWord(avengers))
