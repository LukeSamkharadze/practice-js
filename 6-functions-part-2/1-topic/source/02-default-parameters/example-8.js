let multiplier = 2;

function f(a, b = a * multiplier) {
    console.log(`${ a }, ${ b }`);
}

f(2);
f(1, 2);