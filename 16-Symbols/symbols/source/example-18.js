const c = Symbol();

const object = {
    a: 'a',
    b: 'b'
};

object[c] = 'c';

const keys = Object.keys(object);
console.log(keys);