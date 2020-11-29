'use strict';

const animal = {
    eats: true
};

const rabbit = {
    jumps: true
};

rabbit.__proto__ = animal;

console.log(Object.getOwnPropertyDescriptors(rabbit));

delete rabbit.eats;

console.log(rabbit.jumps);
console.log(rabbit.eats);