const core = {
    type: null
};

const data = {
    n: 1,
    __proto__: core
};

for (let key in data) {
    console.log(key);
}
