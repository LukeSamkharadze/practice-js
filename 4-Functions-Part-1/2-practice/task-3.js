function f(n) {
    if (typeof n != "number")
        throw Error("paramter type is not a Number");

    if (n < 1 || n > 7)
        throw Error("parameter should be in the range of 1 to 7");

    return (n == 1) ? "Sunday" :
        (n == 2) ? "Monday" :
            (n == 3) ? "Tuesday" :
                (n == 4) ? "Wednesday" :
                    (n == 5) ? "Thursday" :
                        (n == 6) ? "Friday" :
                            (n == 7) ? "Saturday" : "";
}

try {
    console.log(f(1));
    console.log(f(2));
    console.log(f(8));
    console.log(f('1'));
}
catch (error) {
    console.log(error);
}