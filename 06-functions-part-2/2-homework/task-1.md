#### Task 1

Write your own implementation of function `mix`. This function is waiting for unlimited number of parameters. Each parameter has to be function, else throw error. Function `mix` invokes callbacks one by one. Each callback as a parameter get result of previous callback invoking. First callback doesn't get any parameter.

Example:

```javascript
mix(() => {
    return 0;
}, (prev) => {
    return prev + 1;
}, (prev) => {
    return prev * 2;
}) // 2
```



