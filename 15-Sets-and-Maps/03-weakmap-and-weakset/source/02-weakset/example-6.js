const set = new WeakSet();

const n = {};

set.add(n);

set.forEach(element => {
    console.log(element);
});