const name = Symbol();
const person = {};
person[name] = 'Tom';

const value = person[name];
console.log(value);