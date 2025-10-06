const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumNumbers(numberList) {
  let num = 0;
  for (let i = 0; i < numberList.length; i++) {
    num += numberList[i];
  }
  return num;
}
