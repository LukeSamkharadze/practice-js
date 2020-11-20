'use strict';

var person = {
  name: 'Pitter'
};

Object.preventExtensions(person);
console.log(Object.isExtensible(person));
