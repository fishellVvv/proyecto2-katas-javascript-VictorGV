const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];

const nameFinder = (nameList, name) => {
  const i = nameList.indexOf(name);
  if (i === -1) {
    return false;
  };
  return [true, i];
};

console.log(nameFinder(names, "Clint"));
