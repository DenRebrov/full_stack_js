const numbers = [-20, -10, 0, 10, 20, 30]

function sortDesc(array) {
  array.sort();
  array.reverse();
  return array
}

console.log(sortDesc(numbers));
