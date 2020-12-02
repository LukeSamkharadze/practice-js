const alphabets = ["A", "B", "C", "D", "E", "F"];

const [a,,c, ...rest] = alphabets;

console.log(a);
console.log(c);
console.log(rest);
