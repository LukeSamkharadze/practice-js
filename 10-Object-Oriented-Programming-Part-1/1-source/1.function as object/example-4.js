'use strict';

function CoffeeMachine(power) {
  this.waterAmount = 0;
  const waterHeatCapacity = 4200;

  function getBoilTime() {
    return this.waterAmount * waterHeatCapacity * 80 / power;
  }

  function onReady() {
    console.log('Coffee is ready');
  }

  this.run = function() {
    setTimeout(onReady, getBoilTime.call(this)); // call(this) passes this
  };
}

const coffeeMachine = new CoffeeMachine(1000000);
coffeeMachine.waterAmount = 200;
coffeeMachine.run();