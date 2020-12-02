const map = new Map();
let key = { name: 'Jon' };

map.set(key, 25);

console.log(map);
console.log(map.values());
console.log(Array.from(map.keys()));
console.log(Array.from(map.entries()));