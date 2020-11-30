#### Task 1

Implement the class **Validator**, for validating strings. This class has next methods:

- method **isEmail** that gets string as parameter and validate is it correct email or not. If it's ok, return true, otherwise false
- method **isDomain** for domain validating
- method **isDate** for date validation
- method **isPhone** for phone validation

- use Regexp for simpler validation

Example:

```javascript
var validator = new Validator();

console.log(validator.isEmail('jshtml@mail.ru'));
console.log(validator.isDomain('jshtml.net'));
console.log(validator.isDate('12.05.2020'));
console.log(validator.isPhone('+375 (29) 817-68-92')); // it can be format of your country
```

