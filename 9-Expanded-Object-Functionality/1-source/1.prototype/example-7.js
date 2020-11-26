const person = {
  getType() {
    console.log(this);
    return "person";
  },
  a: 5
};

const friend = {
  __proto__: person,
  getType() {
    return "person2";
  },
  print() {
    console.log(Object.getPrototypeOf(this).getType.call(this));
    console.log(this.getType());
    console.log(super.getType());
  },
};

friend.print();
console.log(friend.a);
person.a = 1;
console.log(friend.a);

