const source = {
    type: null,
    n: 2
};

const receiver = {
    n: 1,
    ...source
};

Object.assign(receiver, {
    type: true
});

console.log(receiver);

source.s = 'ss';

console.log(receiver.s)