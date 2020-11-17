#### Task 1

Create function `getDivisors` that takes a number as a parameter and returns an array of its divisors (the numbers that divide the given number from 1 to the this number). This function has to validate the input parameter, because function can accept only a number greater than 0.

```js
getDivisors(12); // [1, 2, 3, 4, 6, 12]
getDivisors('Content'); // Error: parameter type is not a Number
getDivisors(0); // Error: parameter can't be a 0
```

Now handle error and log message in console