class User {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  getFullName() {
    return this.name + ' ' + this.surname;
  }
}

class Student extends User {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }

  getCourse() {
    let course = Math.ceil((new Date() - new Date(this.year, 6, 0)) / 31556952000);

    return ([1, 2, 3, 4].includes(course)) ? course : NaN;
  }
}

var student = new Student('John', 'Smith', 2017);

console.log(student.name); // print 'John'
console.log(student.surname); // print 'Smith'
console.log(student.getFullName()); // print 'John Smith'
console.log(student.year); // print 2016
console.log(student.getCourse()); // print 4 - works on semesters according to current date