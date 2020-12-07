const getValue = async() => {
    return 1;
};

const f = async() => {
    console.log('f started');
    const value = await getValue();
    console.log(value);
    console.log('f finished');
}

console.log('global started');
f();
console.log('global finished');