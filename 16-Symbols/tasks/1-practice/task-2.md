#### Task 2

- Create Class `Users` which creates and preserves new Map collection
- Class should have method `add` which adds new user by provided object as a key
- Method `add` should have user object as argument like this {name:'gio', age: 22}
- Method `add` should return inserted User key
- Class should have method `getAge` which takes User key

```javascript
    const users = new Users();
    const user = users.add({name:'gio', age: 22});
    users.getAge(user); // 22
```
