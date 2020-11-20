'use strict';

var user = {};

Object.defineProperty(user, 'name', {
    value: 'Pitter',
    writable: false,
    configurable: false,
});

console.log(Object.getOwnPropertyDescriptors(user));

delete user.name;

Object.defineProperty(user, 'name', {
    writable: true,
});
