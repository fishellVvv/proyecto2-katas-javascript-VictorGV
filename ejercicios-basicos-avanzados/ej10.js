const numbers = [12, 21, 38, 5, 45, 37, 6];

const average = (numberList) => {
  let sum = 0;
  for (const number of numberList) {
    sum += number;
  }
  return sum / numbers.length;
}

console.log(average(numbers))
