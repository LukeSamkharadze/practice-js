function person() {
  this.name = "John";
}

const child = Object.create(new person(), {
  age: {
    value: 13,
  },
});

console.log(child.age);
console.log(child.name);
