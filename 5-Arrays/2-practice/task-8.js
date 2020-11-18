function arrayFill(elem, length) {
    if (typeof (elem) != 'number' && !Array.isArray(elem) && typeof (elem) != 'string')
        throw new Error("first argument must number string or array");
    if (typeof (length) != 'number')
        throw new Error("second parameter must be a number");

    let resultArray = [];

    for (let i = 0; i < length; i++)
        resultArray.push(elem);

    return resultArray;
}

console.log(arrayFill('x', 5));