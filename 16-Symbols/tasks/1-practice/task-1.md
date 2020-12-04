#### Task 1

We have following array of users

```javascript
    const Users = [
        { name: 'Jhon', age: 25 },
        { name: 'Jhon', age: 21 },
        { name: 'Doe', age: 34 }
    ]
```
- Create new Symbol array of user names from that array (for key propose)
- Create function which should return new object from that array like this

```javascript
    const destructuredUsers = {
        unicIdentifier: { name: 'Jhon', age: 25 },
        unicIdentifier: { name: 'Jhon', age: 21 }
    }
```

- unicIdentifier should be a Symbol
- iterate through Symbol array find and log all user age from destructuredUsers object