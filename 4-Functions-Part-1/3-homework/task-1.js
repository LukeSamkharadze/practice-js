function getDivisors(n) {
    if (typeof (n) != "number")
        throw Error("parameter type is not a Number");
    if (n == 0)
        throw Error("parameter can't be a 0");

    divisors = [];

    for (let i = 0; i <= n; ++i)
        if (n % i == 0)
            divisors.push(i)

    return divisors;
}

try {
    console.log(getDivisors(12)); // [1, 2, 3, 4, 6, 12]
    console.log(getDivisors('Content')); // Error: parameter type is not a Number
}
catch (error) {
    console.log(error);
}