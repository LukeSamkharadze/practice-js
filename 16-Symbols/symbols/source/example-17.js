const c = Symbol();

const object = {
    a: 'a',
    b: 'b'
};

object[c] = 'c';

for (let i in object) {
    console.log(i);
}