const set = new Set(['a', 'b']);

set.forEach((value, key, ownSet) => {
    console.log(`${key} ${value}`);
    console.log(set === ownSet);
});