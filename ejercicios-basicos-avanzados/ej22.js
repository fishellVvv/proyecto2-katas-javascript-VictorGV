const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

const unusedFruits = fruits;
for (const item of foodSchedule) {
  if (!item.isVegan) {
    item.name = unusedFruits.pop();
    item.isVegan = true;
  };
};

console.log(foodSchedule);
