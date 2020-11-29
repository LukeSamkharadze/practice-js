const animal = {
    eats: true
};

const rabbit = {
    jumps: true,
    __proto__: animal
};

for (var key in rabbit) {
    console.log(key + ' = ' + rabbit[key]);
}