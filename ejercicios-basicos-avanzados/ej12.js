const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];

const removeDuplicates = (list) => {
  const uniques = [];
  for (const item of list) {
    if (!uniques.includes(item)) {
      uniques.push(item);
    }
  }
  return uniques;
}

console.log(removeDuplicates(duplicates))
