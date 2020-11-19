#### Task 2

Write your own implementation of function `compose`. Function is waiting for unlimited list of parameters. Each parameter has to be function. Each function is waiting for 1 parameter. Function `compose` returns another function with one parameter.

Main idea of function `compose` is `compose(f, g)(x) = f(g(x))`

Example:

```javascript
compose((str) => {
    return str + 'c';
}, (str) => {
    return str + 'b';
})('a'); // 'abc'
```

