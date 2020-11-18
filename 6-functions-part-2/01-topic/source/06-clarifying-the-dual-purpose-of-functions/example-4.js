function Person(name) {
    if (new.target === Person) {
        this.name = name;

        console.log(this.name);
    } else {
        throw new Error('You must use keyword new only with Person');
    }
};

function Alias(name) {
    Person.call(this, name);
};

new Person('Alex');
new Alias('Oliver');