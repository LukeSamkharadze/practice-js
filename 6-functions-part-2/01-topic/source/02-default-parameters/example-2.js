function f(n) {
    n = typeof n !== 'undefined' ? n : 10;

    console.log(n);
}

f(NaN);