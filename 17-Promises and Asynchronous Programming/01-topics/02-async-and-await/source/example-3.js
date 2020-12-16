const promise = async () => {
    throw new Error('Something wrong');
    return 1;
};

promise().catch(({message}) => {
    console.log(message);
});