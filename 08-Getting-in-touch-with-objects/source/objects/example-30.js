'use strict';

var person = {
  name: 'Pitter'
};

Object.seal(person);
console.log(Object.isSealed(person));
