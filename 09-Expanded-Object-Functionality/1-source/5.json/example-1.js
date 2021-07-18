const obj = {
    x: 1,
    data: {
        type: [
            false, null, ''
        ]
    }
};

const serialized = JSON.stringify(obj);

console.log(obj);
console.log(serialized);
console.log(typeof serialized);