const f1 = function (n) {
    return n;
};

const f2 = n => n;

console.log(f1.hasOwnProperty('prototype'));
console.log(f2.hasOwnProperty('prototype'));