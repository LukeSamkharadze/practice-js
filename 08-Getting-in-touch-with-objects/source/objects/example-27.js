'use strict';

var person = {
  name: 'Pitter'
};

Object.freeze(person);

person.name = 'Oliver'; // TypeError: Cannot assign to read only property 'name'

person.age = 19; // TypeError: Cannot add property age

delete person.name; // TypeError: Cannot delete property 'name'