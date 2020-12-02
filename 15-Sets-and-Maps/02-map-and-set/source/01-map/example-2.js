const map = new Map();
const john = { name: 'John' };
const joe = { name: 'Joe' };

map.set(john, 24);
map.set(joe, 25);

console.log(map.get(john));
