#### Task 6

Create your own implementation of function `reduceRight`, logic and behavior should be the same as original method.

- Function should contain checks:
  - First parameter required and has to be only array
  - Second parameter required and has to be only function
  - Third parameter required and has to be only string or number

```javascript
const arr = [1,2,3];
const acc = 0;
reduceRight(arr, function(acc, item, i, arr) {}, acc);
```

