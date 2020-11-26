const data = {
    name: null,
    n: null
};

Object.defineProperties(data, {
    'name': {
       
    },
    'n': {
        value: 1
    }
});

console.log(Object.getOwnPropertyDescriptors(data));