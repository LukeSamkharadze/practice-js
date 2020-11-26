'use strict';

function CoffeeMachine(power) {
  this.waterAmount = 0;

  const waterHeatCapacity = 4200;

  const getBoilTime = function() {
    return this.waterAmount * waterHeatCapacity * 80 / power;
  }.bind(this); // or we can bind function to this

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