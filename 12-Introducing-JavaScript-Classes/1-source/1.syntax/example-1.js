function PersonType (name) {
    this.name = name;
};

PersonType.prototype.sayName = function () {
    console.log(this.name);
}

const person = new PersonType('Jon');
person.sayName();

console.log(person instanceof PersonType); 
console.log(person instanceof Object);
console.log(typeof person === 'object');
console.log(typeof PersonType);