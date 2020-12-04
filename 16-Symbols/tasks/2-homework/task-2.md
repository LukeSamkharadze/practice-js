#### Task 2

Improve `DB` class from previous task.

- Add a `find` method that will return an array of users that satisfy the condition passed as a parameter.
- Generate an error if the `query` is not valid.
- The fields `name` and` country` are looking for a 100% match.
- The fields `age` and` salary` accept an object in which there must be either 2 parameters `min` and` max` or at least one of them.
- Return an empty array if it was not possible to find users that satisfy the request object.

```javascript
const query = {
    country: 'ua',
    age: {
        min: 21
    },
    salary: {
        min: 300,
        max: 600
    }
};
const customers = db.find(query); // array of users
```



