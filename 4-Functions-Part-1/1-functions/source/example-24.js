var f = function(a) {
    var double = a * 2;

    return function(b) {
        return double + b;
    } 
};

var F = f(3);
console.log(F(1));
console.log(F(2));
console.log(F(3));