String.prototype.repeat = function(times) {
    return new Array(times + 1).join(this);
};

console.log('xm'.repeat(3));