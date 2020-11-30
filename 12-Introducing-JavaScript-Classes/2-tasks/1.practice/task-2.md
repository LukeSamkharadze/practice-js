#### Task 2

Modify the **Worker** class from the previous task as follows:

- make all its properties private
- to read them, make getter methods.



Our class will now work like this:

```javascript
var worker = new Worker('John', 'Smith', 10, 31);

console.log(worker.getName()); // print 'John'
console.log(worker.getSurname()); // print 'Smith'
console.log(worker.getRate()); // print 10
console.log(worker.getDays()); // print 31
console.log(worker.getSalary()); // print 310 - because 10*31
```

