const placesToTravel = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" },
];

const placesClean = [];
for (const item of placesToTravel) {
  if (item.id !== 11) {
    placesClean.push(item);
  };
};

console.log(placesClean);
