#### Task 2

Implement the class **Student** that extends the class **User**. This class has to have next properties:

- **name** (extends from User)
- **surname** (extends from User)
- **year** (year of admission)

This class has to have next methods:

- method **getFullName()** (extends from User). Using this class we can get name and surname together.
- method **getCourse()** that returns current course (from 1 to 4). To calculate it: need to subtract from current year the year of admission.

Example:

```javascript
var student = new Student('John', 'Smith', 2016);

console.log(student.name); // print 'John'
console.log(student.surname); // print 'John'
console.log(student.getFullName()); // print 'John Smith'
console.log(student.year); // print 2016
console.log(worker.getCourse()); // print 4 - fourth course, because current year 2020
```

This is how the **User** class should look like, from which our **Student** is inherited:

```javascript
class User {
	constructor(name, surname) {
		this.name = name;
		this.surname = surname;
	}

	getFullName() {
		return this.name + ' ' + this.surname;
	}
}
```

