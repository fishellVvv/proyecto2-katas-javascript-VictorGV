const rollDice = (faces) => {
  return Math.floor(Math.random() * faces + 1);
};

console.log(rollDice(20));
console.log(rollDice(12));
console.log(rollDice(10));
console.log(rollDice(10));
console.log(rollDice(8));
console.log(rollDice(6));
console.log(rollDice(4));
