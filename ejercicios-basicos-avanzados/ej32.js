const xMen = [
  { name: "Wolverine", year: 1974 },
  { name: "Cyclops", year: 1963 },
  { name: "Storm", year: 1975 },
  { name: "Phoenix", year: 1963 },
  { name: "Beast", year: 1963 },
  { name: "Gambit", year: 1990 },
  { name: "Nightcrawler", year: 1975 },
  { name: "Magneto", year: 1963 },
  { name: "Professor X", year: 1963 },
  { name: "Mystique", year: 1978 },
];

const findOldestXMen = (xMen) => {
  let oldestMutant = { name: "", year: 9999 };

  for (const mutant of xMen) {
    if (mutant.year < oldestMutant.year) {
      oldestMutant.name = mutant.name;
      oldestMutant.year = mutant.year;
    }
  }

  return oldestMutant;
};

console.log(findOldestXMen(xMen));
