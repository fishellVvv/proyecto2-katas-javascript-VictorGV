const avengers = [
  "Hulk",
  "Thor",
  "Iron Man",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

const findLongestWord = (stringList) => {
  let longest = "";
  for (const element of stringList) {
    if (element.length > longest.length) {
      longest = element;
    }    
  }
  return longest;
}

console.log(findLongestWord(avengers))
