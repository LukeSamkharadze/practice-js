'use strict';

function CoffeeMachine(power) {
    this.waterAmount = 0;
  
    const getBoilTime = function() {
      return 1000;
    }
  
    const onReady = function() {
      console.log('Coffee is ready');
    }
  
    this.run = function() {
      // setTimeout is inner function
      // setTimeout will start onReady a little bit later
      setTimeout(onReady, getBoilTime());
    };
}

const coffeeMachine = new CoffeeMachine(100);
coffeeMachine.waterAmount = 200;
coffeeMachine.run();
// coffeeMachine.getBoilTime(); //error