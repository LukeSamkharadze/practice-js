const map = new WeakMap();

const a = {};
const b = [];
const c = () => {};
const d = function() {};

map.set(a, 'a');
map.set(b, 'b');
map.set(c, 'c');
map.set(d, 'd');

console.log(map.get(a));
console.log(map.get(b));
console.log(map.get(c));
console.log(map.get(d));
