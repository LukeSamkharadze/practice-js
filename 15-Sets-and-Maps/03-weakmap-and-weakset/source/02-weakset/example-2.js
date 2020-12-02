const set = new WeakSet();

const n = null;

set.add(n);

console.log(set.has(n));