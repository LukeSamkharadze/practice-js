const map = new Map([['name', 'Jon'], ['age', 25]]);

map.forEach((value, key, ownMap) => {
    console.log(`${key} ${value}`);
});