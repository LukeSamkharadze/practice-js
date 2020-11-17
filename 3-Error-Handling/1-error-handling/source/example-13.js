console.log('Before try');

try {
  console.log('try');
  
  throw new Error('warning');
} catch (err) {
  console.log('catch');

  console.log(err.message);
} finally {
  console.log('finally');
}

console.log('after finally');