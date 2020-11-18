const getMultiplier = function (n) {
    const multiplier = n * 2;

    return multiplier;
};

function f(a, b = a * getMultiplier(2)) {
    console.log(`${ a }, ${ b }`);
}

f(2);
f(3);
f(1, 2);
