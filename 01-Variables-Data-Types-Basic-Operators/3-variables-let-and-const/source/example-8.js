'use strict';

var functionsArray = [];

for (var i = 0; i < 2; i++) {
    functionsArray.push(function () {
        return i;
    });
}

console.log(functionsArray[0]()); // 2
console.log(functionsArray[1]()); // 2
