function reverse(array) {
    if (!Array.isArray(array))
        throw new Error("Parameter must be an array");
    if (array.length === 0)
        throw new Error("Array must not be empty");

    return array.map((elem, index, array) => array[array.length - index - 1]);
}

const arr = [3, 2, 1];
console.log(reverse(arr));