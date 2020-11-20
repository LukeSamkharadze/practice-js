const user = {
    firstName: null,
    lastName: null,
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    },
    set fullName(value) {
        const splitted = value.split(' ');
        this.firstName = splitted[0];
        this.lastName = splitted[1];
    },
};

user.fullName = 'Alex Lion';

console.log(user.fullName);
console.log(user.firstName);
console.log(user.lastName);
