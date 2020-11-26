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
  Machine.call(this); // inherited

  let waterAmount = 0;

  this.setWaterAmount = function(amount) {
    waterAmount = amount;
  };
}

let coffeeMachine = new CoffeeMachine(10000);

coffeeMachine.enable();
coffeeMachine.setWaterAmount(100);
coffeeMachine.disable();