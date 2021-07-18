function f(cb) {
    cb();
};

f(function() {
    console.log('first');
});

f(function() {
    console.log('second');
});

f(function() {
    console.log('third');
});