const movies = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
  { name: "Spirited Away", durationInMinutes: 80 },
  { name: "The Matrix", durationInMinutes: 136 },
  { name: "Amélie", durationInMinutes: 110 },
  { name: "Eternal Sunshine of the Spotless Mind", durationInMinutes: 108 },
];

const shortMovies = [];
const mediumMovies = [];
const largeMovies = [];

for (const movie of movies) {
  if (movie.durationInMinutes < 100) {
    shortMovies.push(movie);
  } else if (movie.durationInMinutes < 200) {
    mediumMovies.push(movie);
  } else {
    largeMovies.push(movie);
  };
};

console.log("\nShort Movies:");
for (const movie of shortMovies) {
  console.log(movie.name + " [ " + movie.durationInMinutes + " min.]");
};
console.log("\nMedium Movies:");
for (const movie of mediumMovies) {
  console.log(movie.name + " [ " + movie.durationInMinutes + " min.]");
};
console.log("\nLarge Movies:");
for (const movie of largeMovies) {
  console.log(movie.name + " [ " + movie.durationInMinutes + " min.]");
};
