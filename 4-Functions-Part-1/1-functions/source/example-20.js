var f = function(item, cb) {
    if (typeof cb === 'function') {
        cb(item);  
    } else {
        console.log(item);
    }
};

f('Pitter', function(element) {
    console.log(element + '!');
});

f('Alex', function(element) {
    console.log(element + '@');
});

f('Alex', function(element) {
    console.log('&' + element);
});

f('Andrii');