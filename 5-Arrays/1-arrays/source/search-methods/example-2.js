var arr = [1,2,3,4];

var itemIndex = arr.findIndex(function(item, i, arr) {
    return item > 2;
});

console.log(itemIndex);