function Animal() {}

Animal.prototype.setColor = function (col) {
  color = col;
};
Animal.prototype.getColor = function () {
  return color;
};

function Cat() {
  this.meow = function () {
    console.log("car says meow");
  };
}

function Dog() {}

Dog.prototype.bark = function () {
  console.log("barks");
};

Cat.prototype = Animal.prototype;
let cat = new Cat();

cat.setColor("black");
console.log(cat.getColor());

Cat.prototype = Dog.prototype;
cat = new Cat();

if ("bark" in cat) {
  cat.bark();
}
