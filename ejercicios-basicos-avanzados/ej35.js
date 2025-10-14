const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Jean Grey', power: 'telekinesis' },
  { name: 'Rogue', power: 'power absorption' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'teleportation' },
];

const findMutantByPower = (mutants, power) => {
  let count = 0;
  for (const mutant of mutants) {
    if (mutant.power === power) count++;
  };
  return (count > 0) ? `${power} was found in ${count} mutant(s)` : `${power} was not found among mutants`;
};

console.log(findMutantByPower(mutants, "regeneration"));
