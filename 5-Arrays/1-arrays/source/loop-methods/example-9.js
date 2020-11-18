var arr = [1, -1, 2, -2, 3];

var status = arr.some(function(n){
  return n > 0;
});

console.log(status);