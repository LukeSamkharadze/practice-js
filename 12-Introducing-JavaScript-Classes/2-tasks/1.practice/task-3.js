class Worker {
  #name;
  #surname;
  #rate;
  #days;

  constructor(name_, surname_, rate_, days_) {
    this.#name = name_;
    this.#surname = surname_;
    this.#rate = rate_;
    this.#days = days_;
  }

  getSalary() {
    return this.#rate * this.#days;
  }

  getName() { return this.#name }
  getSurname() { return this.#surname }
  getRate() { return this.#rate }
  getDays() { return this.#days }

  setRate(rate_) { this.#rate = rate_ }
  setDays(days_) { this.#days = days_ }
}

var worker = new Worker('John', 'Smith', 10, 31);

console.log(worker.getRate()); // print 10
console.log(worker.getDays()); // print 31
console.log(worker.getSalary()); // print 310 - because 10*31

// Now using setters:
worker.setRate(20); // increase rate
worker.setDays(10); // decrease days
console.log(worker.getSalary()); // print 200 - because 20*10