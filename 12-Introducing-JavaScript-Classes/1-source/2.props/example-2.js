let methodName = 'sayName';

class PersonClass {
    constructor(name) {
        this.name = name;
    }

    [methodName]() {
        console.log(this.name);
    }
};

let me = new PersonClass('Pitter');
me.sayName();
