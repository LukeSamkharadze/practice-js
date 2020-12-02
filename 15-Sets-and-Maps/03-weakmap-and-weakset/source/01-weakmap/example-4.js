const map = new WeakMap();

const a = null;

map.set(a, 'a');

console.log(map.get(a));
