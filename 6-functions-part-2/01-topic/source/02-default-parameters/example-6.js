function f(a, b = a * 2) {
    console.log(`${ a }, ${ b }`);
}

f(2);
f(1, 2);