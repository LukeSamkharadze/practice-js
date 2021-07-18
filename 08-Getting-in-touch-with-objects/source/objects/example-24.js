const user = {};

Object.defineProperties(user, {
    firstName: {
        value: 'Pitter',
    },
    lastName: {
        value: 'Lion',
    },
    fullName: {
        get: function() {
            return this.firstName + ' ' + this.lastName;
        },
    },
});

console.log(user.fullName);
