function f(...args) {
    if (!args.every((arg) => typeof arg == "number"))
        throw Error("all parameters type should be a Number");

    let sum = 0;
    args.every((arg) => sum += arg);

    return sum;
}

try {
    console.log(f(1, 2, 3, 5, 76, 7));
}
catch (erorr) {
    console.log(erorr);
}