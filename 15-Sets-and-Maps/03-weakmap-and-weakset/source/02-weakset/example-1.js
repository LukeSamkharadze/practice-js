const set = new WeakSet();

const a = {};
const b = [];
const c = () => {};
const d = function() {};

set.add(a);
set.add(b);
set.add(c);
set.add(d);

console.log(set.has(a));
console.log(set.has(b));
console.log(set.has(c));
console.log(set.has(d));