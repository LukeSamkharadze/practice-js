let PersonClass = class PersonClass2 {
    constructor(name) {
        this.name = name;
    }

    sayName() {
        console.log(this.name);
    }
};

console.log(typeof PersonClass);
console.log(typeof PersonClass2);