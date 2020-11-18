var arr = [1,2,3,4];

var item = arr.find(function(item, i, arr) {
    return item > 2;
});

console.log(item);