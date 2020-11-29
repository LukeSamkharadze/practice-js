const animal = {
    eats: true
};

function Rabbit(name) {
    this.name = name;
    this.__proto__ = animal;
}

const rabbit = new Rabbit('Marcus');

console.log(rabbit.name);
console.log(rabbit.eats);