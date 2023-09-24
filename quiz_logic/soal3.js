/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
  // you can only write your code here!

  let sort = animals.sort();
  const groups = {};

  for (const animal of sort) {
    const firstLetter = animal[0];
    if (!groups[firstLetter]) {
      groups[firstLetter] = [animal];
    } else {
      groups[firstLetter].push(animal);
    }
  }

  const result = Object.values(groups).map(group => group.sort());

  return result;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
