function reduce(array, fn, result) {
    if (!Array.isArray(array))
        throw new Error("first argument must be an array");
    if (typeof (fn) != 'function')
        throw new Error("second argument must be a function");
    if (typeof (result) != 'number' && typeof (result) != 'string')
        throw new Error("third argument must be a number or a string");

    for (let i = array.length; i >= 0; i--)
        result = fn(result, array[i], i, array)

    return result;
}

const arr = [1, 2, 3];
const acc = 0;
reduceRight(arr, function (acc, item, i, arr) { }, acc);