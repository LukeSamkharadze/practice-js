### Task 1

Create the function `isCustomerVerified` that can validate `customer` object.

A `customer` object is valid only if it has the `verified: true` flag set.

**ATTENTION**:

1. Function `isCustomerVerified` **HAS TO BE** promise.
2. Using `async & await` **PROHIBITED**.
3. Using third party libraries **PROHIBITED**.
4. If a object is a valid, the promise is resolving with one parameter, the argument for which is `true`.
5. If a object is invalid, the promise is rejecting with one parameter, the argument for which is text `Customer is not verified`.

**Example:**

```javascript
const personFirst = {
    name: 'Oliver',
    verified: true
};

const personSecond = {
    name: 'Alex'
};

isCustomerVerified(personFirst)
    .then(status => console.log(status)) // true
    .catch(error => console.log(error))
    
isCustomerVerified(personSecond)
    .then(status => console.log(status))
    .catch(error => console.log(error)) // Customer is not verified
```

