const animal = {
    eats: true
};

const rabbit = {
    jumps: true,
    __proto__: animal
};

for (let key in rabbit) {
    if (!rabbit.hasOwnProperty(key)) {
        continue;
    }
    console.log(key + ' = ' + rabbit[key]);
}