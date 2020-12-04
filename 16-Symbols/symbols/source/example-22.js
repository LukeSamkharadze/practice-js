const c = Symbol('Field c');
const d = Symbol('Field d');

const core = {
    [c]: 'c'
};

const object = {
    a: 'a',
    b: 'b',
    __proto__: core
};

object[d] = 'd';

console.log(object[c]);
console.log(object[d]);