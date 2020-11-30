class Core {
    constructor(name) {
        this.name = name;
    }
}

class Person extends Core {
    constructor() { 
        // error: must call super, and must be called once, and must be called on first line
        this.age = 21;
    }
    
    getName() {
        return this.name;
    }
}

const pitter = new Person('Pitter');
const name = pitter.getName();

console.log(name);