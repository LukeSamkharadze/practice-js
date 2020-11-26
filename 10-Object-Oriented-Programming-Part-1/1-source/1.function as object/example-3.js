'use strict';

function CoffeeMachine(power) {
  this.waterAmount = 0;

  const waterHeatCapacity = 4200;

  // Formula
  function getBoilTime() {
    return this.waterAmount * waterHeatCapacity * 80 / power; // Error // this is undefined
  }

  function onReady() {
    console.log('Coffee is ready');
  }

  this.run = function() {
    setTimeout(onReady, getBoilTime()); 
  };
}

const coffeeMachine = new CoffeeMachine(1000000);
coffeeMachine.waterAmount = 200;
coffeeMachine.run();