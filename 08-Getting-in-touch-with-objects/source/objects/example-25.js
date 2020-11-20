'use strict';

var person = {
    name: 'Pitter',
};
console.log(person);

Object.preventExtensions(person);

person.name = 'Oliver'; // ok
console.log(person);
delete person.name; // ok
console.log(person);

person.age = 19; // TypeError: Cannot add property age
console.log(person);
