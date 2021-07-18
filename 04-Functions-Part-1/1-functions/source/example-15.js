function f(cb) {
    cb();
};

var callback1 = function() {
    console.log('first');
};

f(callback1);