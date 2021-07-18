var person = {
    name: '',
    setName: function(name) {
        this.name = name;
    },
    getName: function() {
        return this.name;
    }
};
person.setName('Pitter');
console.log(person.getName());
person.setName('Alex');
console.log(person.getName());
console.log(person.name);
