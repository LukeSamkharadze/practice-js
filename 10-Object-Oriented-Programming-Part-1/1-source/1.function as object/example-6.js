'use strict';

function CoffeeMachine(power) {
  this.waterAmount = 0;

  const waterHeatCapacity = 4200;

  const self = this; // or we can save this as propert 

  function getBoilTime() {
    return self.waterAmount * waterHeatCapacity * 80 / power;
  }

  function onReady() {
    console.log('Coffee is ready');
  }

  this.run = function() {
    setTimeout(onReady, getBoilTime());
  };
}

const coffeeMachine = new CoffeeMachine(100000);
coffeeMachine.waterAmount = 200;

coffeeMachine.run();