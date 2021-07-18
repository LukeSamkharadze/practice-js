var arr = [1,2,3];

var mapResult = arr.map(function(item){
    return [item * 2];
});

var flatMapResult = arr.flatMap(function(item){
    return [item * 2];
});

console.log(mapResult); // [[2],[4],[6]]
console.log(flatMapResult); // [2,4,6]

