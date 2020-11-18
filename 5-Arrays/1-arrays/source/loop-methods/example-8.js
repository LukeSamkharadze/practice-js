var arr = [1, -1, 2, -2, 3];

var status = arr.every(function(n){
  return n > 0;
});

console.log(status);