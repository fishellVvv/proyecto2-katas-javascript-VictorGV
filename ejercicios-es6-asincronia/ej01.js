// 1.1
const game = {
  title: "The Last of Us 2",
  gender: ["action", "zombie", "survival"],
  year: 2020,
};

const { title, gender, year } = game;
console.log("1.1 title  ->", title);
console.log("1.1 gender ->", gender);
console.log("1.1 year   ->", year);

// 1.2
const fruits = ["Banana", "Strawberry", "Orange"];

const [fruit01, fruit02, fruit03] = fruits;
console.log("1.2 fruit01 ->", fruit01);
console.log("1.2 fruit02 ->", fruit02);
console.log("1.2 fruit03 ->", fruit03);

// 1.3
const animalFunction = () => {
  return { name: "Bengal Tiger", race: "Tiger" };
};

const { name, race } = animalFunction();
console.log("1.3 name ->", name);
console.log("1.3 race ->", race);

// 1.4
{
  // bloque para no chocar con el otro 'name'
  const car = { name: "Mazda 6", itv: [2015, 2011, 2020] };

  const { name, itv } = car;
  const [itvYear1, itvYear2, itvYear3] = itv;
  console.log("1.4 name     ->", name);
  console.log("1.4 itvYear1 ->", itvYear1);
  console.log("1.4 itvYear2 ->", itvYear2);
  console.log("1.4 itvYear3 ->", itvYear3);
}
