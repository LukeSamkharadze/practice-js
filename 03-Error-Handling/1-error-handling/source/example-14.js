function func(a, b) {
  try {
    console.log('1');
    return a + b;
    console.log('2');
  } finally {
    console.log('function was closed');
  }
}

var result = func(1, 2);

console.log(result);

console.log('Some action');