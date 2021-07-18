var f = function() {
    return function(n) {
        console.log(n);
    } 
};

f()(1);
f()(2);
f()(3);