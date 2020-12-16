function f(array) {
    if (!Array.isArray(array))
        throw Error("parameter type should be an array");
    if (array.length == 0)
        throw Error("parameter can't be an empty");

    console.log(array[0])

    array.splice(0, 1)

    if (array.length != 0)
        f(array);
}

try {
    f([1, 2, 3]);
}
catch (error) {
    console.log(error);
}