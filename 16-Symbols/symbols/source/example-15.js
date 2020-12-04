const object = {
    a: 'a'
};

const value = object[(() => 'a')()];

console.log(value);
