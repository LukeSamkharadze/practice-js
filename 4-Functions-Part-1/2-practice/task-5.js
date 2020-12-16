function isPositive(n) {
    if (typeof n != 'number')
        throw Error("parameter type is not a Number")

    return n > 0;
}

let array = [1, 2, -4, 3, -9, -1, 7];

let newArray = [];

for (let i of array) {
    try {
        if (isPositive(i))
            newArray.push(i)
    }
    catch (error) {
        console.log(error);
    }
}

console.log(newArray);