const map = new Map([['name', 'Jon'], [1, 25]]);

map.forEach((value, key, ownMap) => {
    console.log(`${typeof key} ${value}, ${ownMap}`);
});