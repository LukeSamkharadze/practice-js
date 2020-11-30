class Person {
  #code = 'ZRS@#$@'

  constructor(message) {
  }

  get code() {
    return this.#code;
  }
}

console.log(new Person().code)
console.log(new Person().#code) // error