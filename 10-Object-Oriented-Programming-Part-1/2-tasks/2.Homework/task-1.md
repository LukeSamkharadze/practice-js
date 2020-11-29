## Create setter for onReady
Usually when the coffee is ready, we want to do something, like drink it.

Now, when coffee is ready, the onReady function is triggered, but it is strictly specified in the code:

```javascript
function CoffeeMachine(power, capacity) {
	var waterAmount = 0;
	var WATER_HEAT_CAPACITY = 4200;
	
    function getTimeToBoil() {
		return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }
	
    this.setWaterAmount = function(amount) {
		if (amount < 0) {
			throw new Error("Value has to be positive");
		}
		if (amount > capacity) {
			throw new Error("You can't put more water, than " + capacity);
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
```

Setup the method setOnReady to have possibility to create your own onReady method. Example:

```javascript
var coffeeMachine = new CoffeeMachine(20000, 500);
coffeeMachine.setWaterAmount(150);

coffeeMachine.setOnReady(function() {
	var amount = coffeeMachine.getWaterAmount();

	console.log( 'Coffee is ready: ' + amount + 'ml' ); // Coffee is ready: 150 ml
});

coffeeMachine.run();
```

P.S. *The default method onReady should be the same as before.* 

P.P.S. *Try to make it so that setOnReady can be called not only before but also after starting the coffee maker, that is, so that the onReady function can be changed at any time before it is triggered.* 