function filter(array, fn) {
    if (!Array.isArray(array))
        throw new Error("first argument must be an array");
    if (typeof (fn) != 'function')
        throw new Error("second argument must be a function");

    let newArray = [];

    for (let i = 0; i < array.length; i++)
        if (fn(array[i], i, array))
            newArray.push(arary[i]);

    return newArray;
}

const arr = [1, 2, 3];
filter(arr, function (item, i, arr) { });