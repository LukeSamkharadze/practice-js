var f = function() {
    return function(n) {
        console.log(n);
    } 
};

var F = f();
F(1);
F(2);
F(3);