const map = new WeakMap();

const a = {};

map.set(a, 'a');

map.array.forEach(element => {
    console.log(element);
});
