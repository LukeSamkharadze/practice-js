function mix(...fns)
{
    if(!fns.every(o => typeof(o) === 'function'))
        throw new Error("All parameters must be a function");

    return fns.reduce((prev, curr) => curr(prev), fns.shift()());
}

console.log(
mix(() => {
    return 0;
}, (prev) => {
    return prev + 1;
}, (prev) => {
    return prev * 2;
})); // 2