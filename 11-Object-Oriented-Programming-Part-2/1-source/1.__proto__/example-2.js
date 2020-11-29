const animal = {
    eats: true
};

const rabbit = {
    jumps: true,
    eats: false
};

rabbit.__proto__ = animal;

console.log(rabbit.jumps);
console.log(rabbit.eats);