let arrayNumbers_1 = [1, 2, 3];
let arrayNumbers_2 = [1, 2, 3, 4];
let arrayLetters_1 = ['a', 'b', 'c'];
let arrayLetters_2 = ['a', 'b', 'c'];

function compareArrays(arr1, arr2) {
  return arr1.length == arr2.length && arr1.join('/') == arr2.join('/')
}

console.log(compareArrays(arrayNumbers_1, arrayNumbers_2));
console.log(compareArrays(arrayLetters_1, arrayLetters_2));
