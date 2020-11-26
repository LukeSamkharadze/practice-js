const obj = {
    prop1: NaN,
    prop2: Infinity,
    prop3: -Infinity,
    prop4: function(a, b) {
        return a + b
    }
};

const serialized = JSON.stringify(obj);

console.log(serialized);