class Core {
    constructor() {

    }

    getType(length) {
        return length > 12 ? 'long' : 'short';
    }
}

class Person extends Core {
    constructor(firstName, lastName) {
        super();
        this.firstName = firstName;
        this.lastName = lastName;
    }

    readName() {
        const name = `${this.firstName} ${this.lastName}`;
        
        return name;
    }

    getLength() {
        const name = this.readName();
        
        return name.length;
    }

    getType() {
        const length = this.getLength();

        return super.getType(length);
    }
}

const pitter = new Person('Pitter', 'Thompson');
const pitterName = pitter.readName();
const pitterLength = pitter.getLength();
const pitterType = pitter.getType();

console.log(pitterName);
console.log(pitterLength);
console.log(pitterType);

const oliver = new Person('Oliver', 'Black');
const oliverName = oliver.readName();
const oliverLength = oliver.getLength();
const oliverType = oliver.getType();

console.log(oliverName);
console.log(oliverLength);
console.log(oliverType);