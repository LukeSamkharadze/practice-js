const obj = {
    x: 1,
    data: {
        type: [
            false, null, ''
        ]
    }
};

const serialized = JSON.stringify(obj);
const parsed = JSON.parse(serialized);

console.log(serialized);
console.log(parsed);

console.log(parsed.x)