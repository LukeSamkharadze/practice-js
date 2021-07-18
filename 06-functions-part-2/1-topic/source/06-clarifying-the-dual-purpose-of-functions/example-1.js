function Person(name) {
    if (this instanceof Person) {
        this.name = name;
    } else {
        throw new Error('You must use keyword new with Person');
    }
};

const p = new Person('Alex');
console.log(p.name);

Person('Oliver');