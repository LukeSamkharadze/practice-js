'use strict';

var person = {
    name: 'Pitter',
    data: {
        age: 19
    }
};

Object.freeze(person);

person.data.age = 21;

console.log(person.data.age);