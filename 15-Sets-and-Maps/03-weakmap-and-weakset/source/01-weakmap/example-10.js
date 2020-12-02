const map = new WeakMap();
let key = { name: 'Jon' };

map.set(key, 25);

console.log(map.get(key));

key = null;