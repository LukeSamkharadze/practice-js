function Person(name) {
    if (typeof new.target !== 'undefined') {
        this.name = name;

        console.log(this.name);
    } else {
        throw new Error('You must use keyword new with Person');
    }
};

const person = new Person('Alex');

Person.call(person, 'Oliver');