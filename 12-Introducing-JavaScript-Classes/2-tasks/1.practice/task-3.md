#### Task 3

Modify the **Worker** class from the previous task as follows:

- for the **rate** and **days** properties create the setter methods.

Our class will work like this:

```javascript
var worker = new Worker('John', 'Smith', 10, 31);

console.log(worker.getRate()); // print 10
console.log(worker.getDays()); // print 31
console.log(worker.getSalary()); // print 310 - because 10*31

// Now using setters:
worker.setRate(20); // increase rate
worker.setDays(10); // decrease days
console.log(worker.getSalary()); // print 200 - because 20*10
```

