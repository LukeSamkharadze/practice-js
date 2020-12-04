const c = Symbol();

const object = {
    a: 'a',
    b: 'b'
};

object[c] = 'c';

const keys = Object.getOwnPropertyNames(object);
console.log(keys);