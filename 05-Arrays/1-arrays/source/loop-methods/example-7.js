var arr = ['a', 'b', 'c'];

var result = arr.reduceRight(function(sum, current) {
  return sum + current;
}, '');

console.log(result);