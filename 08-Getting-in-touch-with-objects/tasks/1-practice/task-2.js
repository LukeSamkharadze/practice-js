
let person =
{
  rate: 1
}

Object.defineProperty(person, 'rate', {
  configurable: false,
  enumerable: false
});

Object.defineProperty(person, 'salary', {
  writable: false,
  get() {
    if(typeof this.rate == 'undefined')
      return 0;

    return new Date().getDate() * this.rate;
  }
});

console.log(person.salary);