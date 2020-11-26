function Machine() {
  this._enabled = false;

  this.enable = function() {
    this._enabled = true;
  };

  this.disable = function() {
    this._enabled = false;
  };
}

function CoffeeMachine(power) {
  Machine.call(this);

  this.enable();

  console.log(this._enabled); // true
}

const coffeeMachine = new CoffeeMachine(10000);