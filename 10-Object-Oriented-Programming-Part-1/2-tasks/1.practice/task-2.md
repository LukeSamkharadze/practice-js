## Add getter for power
Add a getter for the private property `power`, so that the external code can get the power of the coffee maker.

Source code:

```javascript
function CoffeeMachine(power, capacity) {
	//...
	this.setWaterAmount = function(amount) {
		if (amount < 0) {
			throw new Error("Value has to be positive.");
		}
		if (amount > capacity) {
			throw new Error("You can't put more water, than " + capacity);
		}
		waterAmount = amount;
	};
    
	this.getWaterAmount = function() {
		return waterAmount;
	};
}
```

Here it means that the power can only be specified when we create a coffee maker and it can be read later, but cannot be changed.