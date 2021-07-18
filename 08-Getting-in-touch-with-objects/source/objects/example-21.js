const user = {
    firstName: null,
    lastName: null,
};

Object.defineProperty(user, 'fullName', {
    get() {
        return this.firstName + ' ' + this.lastName;
    },
    set(value) {
        var splitted = value.split(' ');
        this.firstName = splitted[0];
        this.lastName = splitted[1];
    },
});

user.fullName = 'Alex Lion';

console.log(user.fullName);
console.log(user.firstName);
console.log(user.lastName);
