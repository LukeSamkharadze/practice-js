const user = {
    firstName: 'Alex',
    lastName: 'Lion',
};

Object.defineProperty(user, 'fullName', {
    get() {
        return this.firstName + ' ' + this.lastName;
    },
});

console.log(user.fullName);
