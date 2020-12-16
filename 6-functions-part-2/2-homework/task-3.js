function compose(...fns) {
  if (!fns.every(o => typeof (o) === 'function'))
    throw new Error("All parameters must be a function");

  return (o) => fns.reduceRight((prev, curr) => curr(prev), o);
}

console.log(compose((str) => {
  return str + 'c';
}, (str) => {
  return str + 'b';
})('a')); // 'abc'