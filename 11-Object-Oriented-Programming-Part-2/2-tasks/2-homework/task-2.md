## Hamsters with __proto__
You are the leader of the team that develops the game, the hamster farm. One of the programmers was tasked to create a class `hamster`.

Hamster objects must have an `food` array for storing food and a `found` method that adds food to it.

Below is solution, BUT when you create two hamsters, if you eat one, for some reason the second one also becomes full.

Why? How to fix it?

```javascript
function Hamster() {}

Hamster.prototype.food = []; // empty "stomach"

Hamster.prototype.found = function(something) {
  this.food.push(something);
};

// Create two hamsters and feed the first
var speedy = new Hamster();
var lazy = new Hamster();

speedy.found("apple");
speedy.found("nut");

console.log(speedy.food.length); // 2
console.log(lazy.food.length); // 2 (!??)
```

