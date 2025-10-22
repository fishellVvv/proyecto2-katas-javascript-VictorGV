// 3.1
const users = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];

const names = users.map((user) => user.name);
console.log("3.1 ->", names);

// 3.2
const modifiedNames = users.map((user) =>
  user.name[0] === "A" ? "Anacleto" : user.name
);
console.log("3.2 ->", modifiedNames);

// 3.3
const cities = [
  { isVisited: true, name: "Tokyo" },
  { isVisited: false, name: "Madagascar" },
  { isVisited: true, name: "Amsterdam" },
  { isVisited: false, name: "Seul" },
];

const citiesList = cities.map((city) =>
  city.isVisited ? `${city.name} (Visitado)` : city.name
);
console.log("3.3 ->", citiesList);
