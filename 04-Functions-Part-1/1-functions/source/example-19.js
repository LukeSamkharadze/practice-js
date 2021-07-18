var f = function(cb) {
    if (typeof cb === 'function') {
        cb();
    } else {
        throw new Error('parameter type is not a function');
    }
};

f(function() {
    console.log('callback');
});

f('cb');