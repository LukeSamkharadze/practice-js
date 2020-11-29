function CoffeeMachine(power) { }

CoffeeMachine.prototype.constructor = function(power) {
  this.power = power;
}

CoffeeMachine.prototype.waterAmount = 0;

CoffeeMachine.prototype.WATER_HEAT_CAPACITY = 4200;

CoffeeMachine.prototype.getTimeToBoil = function getTimeToBoil() {
  return this.waterAmount * this.WATER_HEAT_CAPACITY * 80 / this.power;
}

CoffeeMachine.prototype.run = function () {
  setTimeout(function () {
    console.log('Coffee is ready!');
  }, this.getTimeToBoil());
}

CoffeeMachine.prototype.setWaterAmount = function (amount) {
  this.waterAmount = amount;
}

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.setWaterAmount(50);
coffeeMachine.run();