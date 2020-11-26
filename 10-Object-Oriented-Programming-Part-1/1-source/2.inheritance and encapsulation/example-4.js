function Machine(power) {
  this._power = power; // (1)

  this._enabled = false;

  this.enable = function() {
    this._enabled = true;
  };

  this.disable = function() {
    this._enabled = false;
  };
}

function CoffeeMachine(power) {
  Machine.apply(this, arguments); // (2)
  // Machine.call(this, ...arguments); // (2)

  console.log(this._enabled); // false
  console.log(this._power); // 10000
}

const coffeeMachine = new CoffeeMachine(10000);