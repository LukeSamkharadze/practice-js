const person = {};

const name = Symbol('name');

Object.defineProperties(person, {
    [name]: {
        value: 'Pitter'
    }
});

console.log(person[name]);