function sum(a, b) {
    let result;

    if (typeof a === 'number' && typeof b === 'number') {
        result = a + b;
    } else {
        throw new Error('all parameters type should be a number');
    }

    return result;
};

var result = sum(1, 2);
console.log(result);

var result2 = sum('string', 2);
console.log(result2);