function CoffeeMachine(power, capacity) {
  let waterAmount = 0;

  const waterHeatCapacity = 4200;

  function getTimeToBoil() {
    return waterAmount * waterHeatCapacity * 80 / power;
  }

  this.waterAmount = function(amount) {
    // Mode: getter
    if (!arguments.length) {
      return waterAmount;
    }

    // Mode: setter
    if (amount < 0) {
      throw new Error("Value should be positive");
    }
    if (amount > capacity) {
      throw new Error("Can't put water more then " + capacity);
    }

    waterAmount = amount;
  };

  function onReady() {
    console.log('Coffee is ready');
  }

  this.run = function() {
    setTimeout(onReady, getTimeToBoil());
  };
}

const coffeeMachine = new CoffeeMachine(1000, 500);
coffeeMachine.waterAmount(450);
console.log(coffeeMachine.waterAmount()); // 450