// 40.1
const findArrayIndex = (array, text) => {
  return array.indexOf(text);
};

const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

console.log(findArrayIndex(mainCharacters, "Anakin"));
console.log(findArrayIndex(mainCharacters, "Leia"));
console.log(findArrayIndex(mainCharacters, "Luke"));
console.log(findArrayIndex(mainCharacters, "Darth Vader"));

// 40.2
const removeItem = (array, text) => {
  array.splice(findArrayIndex(array, text), 1);
  return array;
};

console.log(removeItem(mainCharacters, "Rey"));
console.log(removeItem(mainCharacters, "Anakin"));
console.log(removeItem(mainCharacters, "Chewbacca"));
