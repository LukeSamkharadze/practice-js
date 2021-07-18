#### Task 7

Next code gets from array of string new array with their lengths:

```javascript
var arr = ['abcd', 'abcde', 'ab', 'abc'];

// START
var arrLength = [];
for (var i = 0; i < arr.length; i++) {
  arrLength[i] = arr[i].length;
}
// FINISH

console.log( arrLength ); // 4,5,2,3
```

Rewrite selected code (START - FINISH):

- instead of `for` use method `map` 

