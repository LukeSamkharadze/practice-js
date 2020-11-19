function mix(...fns) {
    if (!fns.every(o => typeof (o) === 'function'))
        throw new Error("All parameters must be a function");

    let result = { errors: [], value: undefined };

    for (let i = 0; i < fns.length; i++) {
        try {
            if (i === 0)
                result.value = fns[0]();
            else
                result.value = fns[i](result.value);
        }
        catch (error) {
            result.errors.push({ name: error.name, message: error.message, stack: error.stack, level: i })
        }
    }

    return result;
}

console.log(mix(() => {
    return 0;
}, (prev) => {
    return prev + 1;
}, (prev) => {
    throw new RangeError('Range is wrong');
}, (prev) => {
    return prev * 3;
}));