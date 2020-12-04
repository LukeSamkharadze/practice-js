#### Task 1

Create class `DB` that will implement `CRUD` model.

- As a data structure, use `Map`.
- Implement the `create` method, which get an object as parameter and validates it; if object is invalid, it generates an error.
- The `create` method returns the ` id`.
- When creating a user, generate a unique `id`, which is the key for the user object in the ` Map` structure.
- The `read` method accepts the user id, if there is no such user to return ` null`, and if there is, return the user object with the `id` field inside the object.
- If you pass a non-string to the `read` method then generate an error.
- If don't pass a parameter to the method `read` then generate an error.
- The `readAll` method returns an array of users.
- Generate an error if a parameter is passed to the `readAll` method.
- The `update` method updates the user.
- The `update` method takes 2 required parameters.
- The `update` method generates an error if a non-existing ` id` is passed.
- The `update` method generates an error if ` id` is passed with a type not a string.
- The `update` method generates an error if the second parameter is not valid.
- The method `delete` deletes the user.
- Generate an error if passed to the `delete` method non-existent or invalid `id`.

```javascript
const db = new DB();

const person = {
    name: 'Pitter', // required field with type string
    age: 21, // required field with type number
    country: 'ge', // required field with type string
    salary: 500 // required field with type number
};

const id = db.create(person);
const customer = db.read(id);
const customers = db.readAll(); // array of users
db.update(id, { age: 22 }); // id
db.delete(id); // true
```



