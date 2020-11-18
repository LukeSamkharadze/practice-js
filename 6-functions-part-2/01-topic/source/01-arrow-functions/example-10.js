const f = function () {
    return () => arguments;
};

const arrowFunction = f(1, 2, 3);

console.log(arrowFunction(4, 5, 6));