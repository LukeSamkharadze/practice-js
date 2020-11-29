const animal = {
    eats: true
};

const rabbit = {
    jumps: true,
};

Object.setPrototypeOf(rabbit, animal);

const proto = Object.getPrototypeOf(rabbit);

console.log(proto);