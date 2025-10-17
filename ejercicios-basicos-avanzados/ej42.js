const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

const swap = (array, indexA, indexB) => {
  if (indexA >= array.length || indexB >= array.length)
    return "Error: index out of bounds";

  const swapedArray = array.slice();

  swapedArray[indexA] = array[indexB];
  swapedArray[indexB] = array[indexA];

  return swapedArray;
};

console.log(swap(fantasticFour, 0, 1));
console.log(swap(fantasticFour, 6, 4));
