const animal = {
    eats: true
};

const rabbit = {
    jumps: true,
    eats: false
};

rabbit.__proto__ = animal;

console.log(rabbit.eats);

delete rabbit.eats;

console.log(rabbit.eats);