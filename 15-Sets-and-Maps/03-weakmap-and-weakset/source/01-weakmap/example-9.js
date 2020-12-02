const map = new WeakMap();

const a = {};

map.set(a, 'a');

map.delete(a);

console.log(map.has(a));
