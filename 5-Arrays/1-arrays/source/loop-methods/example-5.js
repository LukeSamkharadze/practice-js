var arr = [1, 2, 3];

var result = arr.reduce(function(sum, current) {
  return sum + current;
}, 4);

console.log(result);