#### Task 5

Create your own implementation of function `reduce`, logic and behavior should be the same as original method.

- Function should contain checks:
  - First parameter required and has to be only array
  - Second parameter required and has to be only function
  - Third parameter required and has to be only string or number

```javascript
const arr = [1,2,3];
const acc = 0;
reduce(arr, function(acc, item, i, arr) {}, acc);
```

