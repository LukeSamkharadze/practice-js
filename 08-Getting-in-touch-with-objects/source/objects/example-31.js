'use strict';

var person = {
  name: 'Pitter'
};

Object.freeze(person);
console.log(Object.isFrozen(person));
