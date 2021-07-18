// Object.assign(target, ...sources)

const zdarova = {
  type: 'js',
  name: 'index.js'
};

const receiver = {};

Object.assign(receiver, zdarova, {type:"css"})

zdarova.type ="zdarova";
console.log(receiver);