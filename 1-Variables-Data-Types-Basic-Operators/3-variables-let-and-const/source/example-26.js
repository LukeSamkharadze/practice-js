'use strict';

const obj = ['a', 'b', 'c'];

for (const item of obj) {
    item = item + '!'; // TypeError: Assignment to constant variable.
    console.log(item);    
}