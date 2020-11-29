// 1. Constructor Animal
function Animal(name) {
    this.name = name;
}

// 1.1. Prototype method
Animal.prototype.sayHi = function() {
    console.log(this.name);
}

// 2. Constructor Rabbit
function Rabbit() {
    Animal.apply(this, arguments);
    this.speed = 0;
}

// 2.1 Inheritance
Rabbit.prototype.__proto__ = Animal.prototype;

// 2.2. Rabbit Methods | you can still add methods to all rabbits
Rabbit.prototype.jump = function() {
    this.speed++;
    console.log(this.name + ' is jumping, speed: ' + this.speed);
};
const rabbit = new Rabbit('Marcus');
rabbit.jump();
rabbit.sayHi();

// new Animal().jump();

