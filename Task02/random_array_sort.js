const numbers = [1, 2, 3, 4, 5, 6, 7]

function shuffledArray(array) {
  return array.sort(function(){
    return Math.random() - 0.5;
  });
}

console.log(shuffledArray(numbers));


