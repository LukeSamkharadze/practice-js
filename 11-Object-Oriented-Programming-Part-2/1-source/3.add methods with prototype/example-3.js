function Animal(name, color) {
    this._name = name;
    this._color = color;
}
Animal.prototype.sayHi = function() {
    console.log(this._name);
}

Animal.prototype.sayAnimalColor = function() {
    console.log(this._color);
}

Animal.prototype.sayAnimalColorAndName = function() {
    console.log('My name is ' + this._name + ', and my color is ' + this._color);
}

const animal = new Animal('Dog', 'red'); // var animal = {_name: 'Dog', _color: 'red'}; animal.sayHi()
const cat = new Animal('Cat'); // var cat = {_name: 'Cat'}; cat.sayHi()
const bird = new Animal('Bird'); // var bird = {_name: 'Bird'}; bird.sayHi()

animal.sayHi();