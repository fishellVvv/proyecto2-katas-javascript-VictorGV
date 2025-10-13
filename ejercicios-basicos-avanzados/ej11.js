const mixedElements = [
  6,
  1,
  "Marvel",
  1,
  "hamburguesa",
  "10",
  "Prometeo",
  8,
  "Hola mundo",
];

const averageWord = (list) => {
  let sum = 0;
  for (const item of list) {
    if (typeof(item) === "number") {
        sum += item;
    } else {
        sum += item.length;
    }
  }
  const average = sum / list.length;
  return average;
}

console.log(averageWord(mixedElements))
