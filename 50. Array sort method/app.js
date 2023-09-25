// alphabetical;
const names = ["asilbek", "ikrom", "doniyor", "bobur"];

const sortedNames = names.sort();
console.log(sortedNames);

// numbers
const numbers = [3, 1, 19, 11, 7, 5];

const sortedNumbers = numbers.sort((a, b) => {
  return b - a;
});
console.log(sortedNumbers);
