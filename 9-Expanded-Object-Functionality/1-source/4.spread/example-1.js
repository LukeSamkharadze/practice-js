const source = {
    type: null,
    n: 2
};

const receiver = {
    n: 1,
    ...source
};

console.log(receiver);

