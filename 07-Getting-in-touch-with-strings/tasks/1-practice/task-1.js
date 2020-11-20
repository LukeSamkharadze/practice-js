function upperCaseFirst(string)
{
  if(typeof string !== 'string')
    throw new Error("Parameter must be a string");

  if(string.length === 0)
    return string;

  return string[0].toUpperCase() + string.slice(1);
}

console.log(upperCaseFirst('pitter')); // Pitter
console.log(upperCaseFirst('')); // ''