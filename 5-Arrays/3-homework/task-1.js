function f(array) {
    if (!Array.isArray(array))
        throw new Error("Parameter must be an array");

    let sum = 0;

    for (let elem of array)
        if (Array.isArray(elem))
            sum += f(elem);
        else if (typeof (elem) === 'number')
            sum += elem;
        else
            throw new Error("All elements must be an array or a number");

    return sum;
}

const arr = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
console.log(f(arr)); // 12
const arr2 = [[[[[1, 2]]]]];
console.log(f(arr2)); // 3
const arr3 = [[[[[1, 2]]], 2], 1];
console.log(f(arr3)); // 6
const arr4 = [[[[[]]]]];
console.log(f(arr4)); // 0
const arr5 = [[[[[], 3]]]];
console.log(f(arr5)); // 3