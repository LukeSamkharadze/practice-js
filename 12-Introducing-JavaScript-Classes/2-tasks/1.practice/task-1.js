class Worker
{
  constructor(name_, surname_, rate_, days_)
  {
    this.name = name_;
    this.surname = surname_;
    this.rate = rate_;
    this.days = days_;
  }

  getSalary()
  {
    return this.rate * this.days;
  }
}

var worker = new Worker('John', 'Smith', 10, 31);

console.log(worker.name); // print 'John'
console.log(worker.surname); // print 'Smith'
console.log(worker.rate); // print 10
console.log(worker.days); // print 31
console.log(worker.getSalary()); // print 310 - because 10*31