'use strict';

var user = {};

Object.defineProperty(user, 'name', {
    value: 'Pitter',
    writable: false,
    configurable: false,
});

user.name = 'Alex';

console.log(user.name);
