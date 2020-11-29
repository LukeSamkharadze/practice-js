const animal = {
    eats: true
};

const rabbit = {
    jumps: true,
    __proto__: animal
};

console.log(rabbit.hasOwnProperty('jumps'));
console.log(rabbit.hasOwnProperty('eats'));