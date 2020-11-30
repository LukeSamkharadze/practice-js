class Core {
    constructor(name) {
        this.name = name;
    }
}

class Person extends Core { // can extend only from one Class
    getName() {
        return this.name;
    }
}

const pitter = new Person('Pitter');
const name = pitter.getName();

console.log(name);