const animal = {
    eats: true
};

function Rabbit(name) {
    this.name = name;
}

let rabbit = new Rabbit('Marcus');

console.log(rabbit.constructor);

Rabbit.prototype = animal;

rabbit = new Rabbit('Marcus');

console.log(rabbit.constructor);
console.log(rabbit.name);
console.log(rabbit.eats);

