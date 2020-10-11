const fruits = ['orange', 'apple', 'banana', 'nuts', '']

function filterByLength(array, from, to) {

  return array.filter(function(element) {
    return element.length >= from && element.length <= to
  });
}
console.log(filterByLength(fruits, 0,5));
