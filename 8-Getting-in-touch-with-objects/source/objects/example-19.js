const obj = {
    a: 1,
    b: 2,
    internal: 3,
};

Object.defineProperty(obj, 'internal', {
    enumerable: false,
});

console.log(Object.keys(obj));
console.log(Object.getOwnPropertyNames(obj));
