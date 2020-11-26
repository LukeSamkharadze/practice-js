function checkSpam(source, example)
{
  if(typeof source !== 'string' || typeof example !== 'string')
    throw new Error("Both parameters must be a string");

    return source.toLocaleLowerCase().indexOf(example.toLocaleLowerCase()) !== -1;
}

console.log(checkSpam('pitterXXX@gmail.com', 'xxx')); // true
console.log(checkSpam('pitterxxx@gmail.com', 'XXX')); // true