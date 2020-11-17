#### Task 5

You have the array with numbers `[1, 2, -4, 3, -9, -1, 7]`. Create a new array from this array with only positive numbers `[1, 2, 3, 7]` will remain. Create for this an additionnal function `isPositive (-3)` that will accept a number as a parameter and return true if the number is positive, and false if number is negative. This function has to validation the input parameter, because function can accept only a number.

*To add a new item to the end of the array, use the push method.*

```js
// Example of using isPositive()
isPositive(-3) // false
isPositive(3) // true
isPositive('s') // Error: parameter type is not a Number

// Example of using push()
var arr = [8];
arr.push(2);
console.log(arr[1]); // выведет число 2
```


Now handle error and log message in console