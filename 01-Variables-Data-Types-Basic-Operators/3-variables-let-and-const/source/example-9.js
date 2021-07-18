'use strict';

let functionsArray = [];

for (let i = 0; i < 2; i++) {
    functionsArray.push(function () {
        return i;
    });
}

console.log(functionsArray[0]()); // 0