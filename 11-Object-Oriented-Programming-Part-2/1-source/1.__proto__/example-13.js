const obj = {};

// Is it true that we read method from prototype?
console.log(obj.toString === Object.prototype.toString); // true

// Is it true that __proto__ is an Object.prototype?
console.log(obj.__proto__ === Object.prototype); // true

// Is it true that Object.prototype has __proto__ ?
console.log(obj.__proto__.__proto__); // treu, it is null