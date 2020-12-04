const a = Symbol.for('A');
const description = Symbol.keyFor(a);

console.log(description);