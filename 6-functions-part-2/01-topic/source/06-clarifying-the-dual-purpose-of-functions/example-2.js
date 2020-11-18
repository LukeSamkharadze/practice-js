function Person(name) {
    if (this instanceof Person) {
        this.name = name;

        console.log(this.name);
    } else {
        throw new Error('You must use keyword new with Person');
    }
};

const person = new Person('Alex');

Person.call(person, 'Oliver');