'use strict';

var count = 0;

{
    let count = 1;
    console.log(count); // 1
}

console.log(count); // 0