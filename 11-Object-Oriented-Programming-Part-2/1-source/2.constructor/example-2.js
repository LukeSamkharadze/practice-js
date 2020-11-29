function Rabbit() {}
class a {}

console.log(Object.getOwnPropertyNames(Rabbit.prototype));
console.log(Object.getOwnPropertyNames(a.prototype));
console.log(Rabbit.prototype.constructor === Rabbit);