const name = Symbol();

const person = {};
person[name] = 'Tom';
person.name = 'Oscar';

const first = person[name];
const second = person.name;

console.log(first);
console.log(second);

console.log(person);