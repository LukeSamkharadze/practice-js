const getValue = async() => {
    throw new Error('Something is wrong');
    return 1;
};

const f = async() => {
    try {
        const value = await getValue();
        console.log(value);
    } catch (message) {
        console.log(message);
    }
}

f();