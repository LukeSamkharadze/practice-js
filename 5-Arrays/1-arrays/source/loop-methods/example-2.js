var arr = ['Alex', 'Pitter'];

var result = arr.forEach(function(item, i, arr) {
  console.log( i + ': ' + item + ' (array: ' + arr + ')' );
});

// console.log(result);