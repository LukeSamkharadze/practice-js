// Object.create(proto, [propertiesObject])

const person = {
  getType() {
    return "person";
  },
};

const child = Object.create(person, { age: { value: 13 } });

console.log(Object.getOwnPropertyDescriptors(child));
console.log();
console.log(Object.getPrototypeOf(child));

console.log(child.age);
console.log(child.getType());
