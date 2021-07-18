var arr = ['a', 'b', 'c'];

var result = arr.reduce(function(sum, current) {
  return sum + current;
}, '');

console.log(result);