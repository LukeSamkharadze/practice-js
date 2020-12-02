const user1 = {
    name: 'Jhon',
    age: 12,
    address: {
        city: 'London',
        country: 'England'
    }
};

const user2 = {
    name: 'Giorgi',
    age: 25,
    address: {
        city: 'Tbilisi',
        country: 'Georgia'
    }
};

const mergeUsers = {...user1, ...user2};
console.log(mergeUsers);
