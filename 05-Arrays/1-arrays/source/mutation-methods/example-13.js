var arr = ['b', 'a', 'e', 'c'];

arr.sort(function(prev, next) {
    return next > prev ? 1 : -1;
});

console.log(arr);
