const user = {
    name: 'Pitter',
    sayName() {
        return this.name;
    },
};

for (const key in user) {
    console.log(key);
}

console.log(Object.getOwnPropertyDescriptors(user));
