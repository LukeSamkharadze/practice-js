// constructor
function Animal(name) {
  this.name = name;
  this.speed = 0;
  // Own method
  this.run = function (speed) {
    this.speed += speed;
    console.log(this.name + " is running, his speed is " + this.speed);
  };
}
// Prototype methods
Animal.prototype.stop = function () {
  this.speed = 0;
  console.log(this.name + " is stopped");
};

const animal = new Animal("Cat");
console.log(animal.speed);
animal.run(5); // Cat is running, his speed is 5
animal.run(5); // Cat is running, his speed is 10
animal.stop(); // Cat is stopped

console.log(animal.hasOwnProperty("run"));
console.log(animal.hasOwnProperty("stop"));
