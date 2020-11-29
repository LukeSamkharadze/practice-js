const animal = {
    eats: true
};

const cat = Object.create(animal, {
    name: {
        value: 'Cat'
    }
});

console.log(cat.name);
console.log(cat.eats);