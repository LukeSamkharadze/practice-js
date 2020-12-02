const set = new Set();

let item = {
    age: 21
};

set.add(item);

console.log(set.size);

item = null;

console.log(set.size);
item = [...set][0];
console.log(item);