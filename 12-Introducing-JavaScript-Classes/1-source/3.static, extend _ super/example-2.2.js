class Core {
    constructor(name) {
        this.name = name;
    }
}

class Person extends Core {
    constructor(name) {
        super(name)
        this.age = 21;
    }
    
    getName() {
        return this.name;
    }
}

const pitter = new Person('Pitter');
const name = pitter.getName();

console.log(name);