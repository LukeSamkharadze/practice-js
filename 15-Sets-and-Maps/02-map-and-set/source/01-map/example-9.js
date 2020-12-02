const map = new Map();

map.set('name', 'John');

console.log(map.has('name'));

map.clear();

console.log(map.has('name'), map.has('John'));
