const user = {
    birthday: null,
    get age() {
        const today = new Date();
        const yearDelta = today.getFullYear() - this.birthday.getFullYear();

        return yearDelta;
    },
};

user.birthday = new Date(2000, 1, 1);

console.log(user.age);
