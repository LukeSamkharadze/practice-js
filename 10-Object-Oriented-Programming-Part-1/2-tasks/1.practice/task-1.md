## Add method and property to coffee maker
Improve the pre-made coffee maker code below: add the public method `stop()` to the coffee maker, which will stop boiling (via clearTimeout).

```javascript
function CoffeeMachine(power) {
	this.waterAmount = 0;
	var WATER_HEAT_CAPACITY = 4200;
	var self = this;
	
    function getBoilTime() {
		return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
	}
	
    function onReady() {
		console.log('Coffee is ready');
	}
	
    this.run = function() {
		setTimeout(onReady, getBoilTime());
	};
}
```

Next code should output nothing:

```javascript
var coffeeMachine = new CoffeeMachine(50000);
coffeeMachine.waterAmount = 200;
coffeeMachine.run();
coffeeMachine.stop(); // coffee isn't ready
```

P.S. *Don't need to calculate and store the current water temperature.*

P.P.S. *For resolving, you will most likely need to add the private property timerId, which will store the current timer.* 

