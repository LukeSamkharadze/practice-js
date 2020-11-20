# Task 2

Create object `person` with two properties: `rate` and `salary`.

The property `rate` can be read and written, but not deleted, and this property should not participate in the enumeration of all properties when iterating.

Property `salary` can be read, but can not be changed. When reading the property, `salary` returns the result of multiplying the ` rate` field by the current day in the month. If the rate is not set - return the number 0.

Example:

```javascript
person.rate = 30;

// Suppose that today is January 10th, in this case this property returns the number 300
person.salary;
```
