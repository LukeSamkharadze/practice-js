const person = {
  getType() {
    return "person";
  },
};

var ocn = {};
// ocn.__proto__ = person;
Object.setPrototypeOf(ocn, person);

console.log(ocn.getType());
