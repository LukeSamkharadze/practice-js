function Machine() {
  let enabled = false;

  this.enable = function() {
    enabled = true;
  };

  this.disable = function() {
    enabled = false;
  };
}

function CoffeeMachine(power) {
  Machine.call(this);

  this.enable();

  // Error
  console.log(enabled);
}

const coffeeMachine = new CoffeeMachine(10000);
const machine = new Machine();