const words = ['apple', ['a', 'b', 'd']];

const [,[first, second, third = 'c']] = words;

console.log(first);
console.log(second);
console.log(third);