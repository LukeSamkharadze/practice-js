function CoffeeMachine(power) {
    this.waterAmount = 0;
  
    console.log('We created a new CoffeeMachine. The power is ' + power);
}
  
// Create CoffeeMachine
var CoffeeMachine = new CoffeeMachine(100);
  
// Put water
CoffeeMachine.waterAmount = 200;

// console.log(CoffeeMachine.power)