const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const getValue = async() => {
    await delay(5000);
    return 1;
};

const f = async() => {
    console.log('F started');
    const value = await getValue();
    console.log(value);
};

f();