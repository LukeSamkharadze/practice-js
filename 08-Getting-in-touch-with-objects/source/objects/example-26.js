'use strict';

var person = {
    name: 'Pitter',
};

Object.seal(person);

person.name = 'Oliver'; // ok

// person.age = 19; // TypeError: Cannot add property age

delete person.name; // TypeError: Cannot delete property 'name'
