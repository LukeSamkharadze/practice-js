const animal = {
    eats: true
};

const rabbit = {
    jumps: true,
    __proto__: animal
};

const proto = Object.getPrototypeOf(rabbit);

console.log(proto);