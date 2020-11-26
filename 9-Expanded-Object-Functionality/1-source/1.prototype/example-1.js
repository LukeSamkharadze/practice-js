console.log(Object.prototype.toString);

var s = {
  
}

console.log(s.toString())

for (let property in Object.prototype) {
    console.log(property);
}

console.log(Object.prototype.propertyIsEnumerable('toString'));