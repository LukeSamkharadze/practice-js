function some(array, fn) {
    if (!Array.isArray(array))
        throw new Error("first argument must be an array");
    if (typeof (fn) != 'function')
        throw new Error("second argument must be a function");

    for (let i = 0; i < array.length; i++)
        if (fn(array[i], i, array))
            return true;

    return false;
}

const arr = [1, 2, 3];
console.log(some(arr, function (item, i, arr) { return item == i}));