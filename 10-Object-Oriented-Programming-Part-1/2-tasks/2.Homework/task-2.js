function CoffeeMachine(power, capacity) {
  var waterAmount = 0;
  var WATER_HEAT_CAPACITY = 4200;
  var isRunning = false

  function getTimeToBoil() {
    return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }

  function onReady() {
    console.log('Coffee is ready');
  }

  function onReady_() {
    isRunning = false;
    onReady();
  }

  this.setWaterAmount = function (amount) {
    if (amount < 0) {
      throw new Error("Value has to be positive");
    }
    if (amount > capacity) {
      throw new Error("You can't put more water, than " + capacity);
    }
    waterAmount = amount;
  }

  this.getWaterAmount = function () {
    return waterAmount;
  }

  this.run = function () {
    isRunning = true;
    setTimeout(onReady_, getTimeToBoil());
  }

  this.setOnReady = function (newOnReady) {
    onReady = newOnReady;
  }

  this.isRunning = () => isRunning;
}

var coffeeMachine = new CoffeeMachine(20000, 500);
coffeeMachine.setWaterAmount(100);

console.log('Before: ' + coffeeMachine.isRunning()); // Before: false

coffeeMachine.run();

console.log('In progress: ' + coffeeMachine.isRunning()); // In progress: true

coffeeMachine.setOnReady(function () {
  console.log('After: ' + coffeeMachine.isRunning()); // After: false
});