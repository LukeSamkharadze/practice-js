function CoffeeMachine(power, capacity) {
  var waterAmount = 0;
  var WATER_HEAT_CAPACITY = 4200;

  function getTimeToBoil() {
    return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }

  function onReady() {
    console.log('Coffee is ready');
  }

  function onReady_() { onReady(); }

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
    setTimeout(onReady_, getTimeToBoil());
  }

  this.setOnReady = function (newOnReady) {
    onReady = newOnReady;
  }
}

var coffeeMachine = new CoffeeMachine(20000, 500);
coffeeMachine.setWaterAmount(150);

coffeeMachine.run();

coffeeMachine.setOnReady(function () {
  var amount = coffeeMachine.getWaterAmount();
  
  console.log('Coffee is ready: ' + amount + 'ml'); // Coffee is ready: 150 ml
});