'use strict';

let count = 0;

{
    var count = 1; // SyntaxError: Identifier 'count' has already been declared
    console.log(count);
}

console.log(count);