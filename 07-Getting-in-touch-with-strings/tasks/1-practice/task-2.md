# Task 2

Write function `checkSpam(source, example)` that returns `true`, if string `source` contains `example`, otherwise `false`.

The function should not be case sensitive:

If first or second parameters aren't string - throw error.

```javascript
checkSpam('pitterXXX@gmail.com', 'xxx'); // true
checkSpam('pitterxxx@gmail.com', 'XXX'); // true
```
