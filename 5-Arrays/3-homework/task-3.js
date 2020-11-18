function rotate(array, number, direction = "right") {
    if (!Array.isArray(array))
        throw new Error("First argument must be an array");
    if (typeof (number) != 'number')
        throw new Error("Second argument must be a number");
    if (typeof (direction) != 'string')
        throw new Error("Third argument must be a string");

    return array.map((elem, index, array) =>
        (direction === "left") ? array[(index + number) % array.length] :
            array[(index - number % array.length) >= 0 ? index - number % array.length : array.length + index - number % array.length]);
}

const arr = [1, 2, 3];
console.log(rotate(arr, 1, 'left'));  // result: [2,3,1]
console.log(rotate(arr, 1));  // result: [3,1,2]
console.log(rotate(arr, 2));  // result: [2,3,1]
