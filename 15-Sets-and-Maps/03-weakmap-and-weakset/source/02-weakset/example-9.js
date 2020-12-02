const set = new WeakSet();
let key = {};

set.add(key);

set.delete(key);

console.log(set.has(key));