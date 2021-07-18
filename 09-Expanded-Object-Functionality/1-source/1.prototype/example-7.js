const person = {
  getType() {
    console.log(this,"proto");
  },
  a: 5
};

const friend = {
  __proto__: person,
  getType() {
    console.log(this);
  },
  print() {
    Object.getPrototypeOf(this).getType();
    Object.getPrototypeOf(this).getType.call(this);
    this.getType();
    super.getType();
  },
};

friend.print();
// console.log(friend.a);
person.a = 1;
// console.log(friend.a);

