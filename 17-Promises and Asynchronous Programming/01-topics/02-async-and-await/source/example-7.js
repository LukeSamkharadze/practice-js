const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const getOne = async () => {
    await delay(2000);
    console.log(1);
};

const getTwo = async () => {
    await delay(2000);
    console.log(2);
};

const f = async () => {
    console.log('F started');
    await getOne();
    await getTwo();
    console.log('F finished');
};

f();
