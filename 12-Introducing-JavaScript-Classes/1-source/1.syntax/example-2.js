class PersonClass {
    constructor (name) {
        this.name = name;
    }

    sayName () {
        console.log(this.name);
    }
}

const jon = new PersonClass('John');
jon.sayName();

console.log(jon instanceof PersonClass);
console.log(jon instanceof Object);
console.log(typeof jon === 'object');
console.log(typeof PersonClass);