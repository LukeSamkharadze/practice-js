const user1 = {
    name: 'Jhon',
    age: 12,
    address: {
        city: 'London',
        country: 'England'
    }
};

const {name: firstName, ...rest} = user1;

console.log(firstName, rest);
