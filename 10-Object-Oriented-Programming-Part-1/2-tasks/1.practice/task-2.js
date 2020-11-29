function CoffeeMachine(power, capacity) {
  Object.defineProperty(this, 'power', { get: () => {power }})

  this.setWaterAmount = function (amount) {
    if (amount < 0) {
      throw new Error("Value has to be positive.");
    }
    if (amount > capacity) {
      throw new Error("You can't put more water, than " + capacity);
    }
    waterAmount = amount;
  };

  this.getWaterAmount = function () {
    return waterAmount;
  };
}

let coffeMachine = new CoffeeMachine(100, 100);
console.log(coffeMachine.power);