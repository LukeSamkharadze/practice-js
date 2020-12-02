const user = {
    name: {
        first: 'John',
        last: 'Doe'
    },
    age: 21,
    cars: [ 'Audi', 'BWM' ]
};

// Destructuring mixed objects and arrays.
const {
    name: { first: firstName },
    cars: [ firstCar ]
} = user;

console.log(`My name is ${firstName}, and my favorite car is ${firstCar}.`);