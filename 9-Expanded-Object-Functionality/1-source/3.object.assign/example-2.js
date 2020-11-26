// Object.assign(target, ...sources)

const receiver = { };

let source = {
    n: null
};

Object.defineProperty(source, 'name', {
  value: "zdarova",
  enumerable: true,
  writable: false,
  configurable: false
});

Object.assign(receiver, source);

console.log(Object.getOwnPropertyDescriptors(source)); 
console.log(Object.getOwnPropertyDescriptors(receiver));

console.log(receiver.name);