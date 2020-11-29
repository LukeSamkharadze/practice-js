// 1. Constructor Animal
function Animal(name) {
    this.name = name;
}

// 1.1. Prototype Method
Animal.prototype.sayHi = function(transformed) {
    return transformed ? this.name.toLowerCase() : this.name;
}

// 2. Constructor Rabbit
function Rabbit() {
    Animal.apply(this, arguments);
}

// 2.1. Inheritance
Rabbit.prototype = Object.create(Animal.prototype);

// 2.2. Rabbit Methods
Rabbit.prototype.sayHi = function() {
    const name = Animal.prototype.sayHi.apply(this, arguments);
    console.log('My name is ' + name);
};

const rabbit = new Rabbit('Marcus');
rabbit.sayHi();
rabbit.sayHi(true);