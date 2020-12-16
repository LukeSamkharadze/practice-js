const Users = [
  { name: 'Jhon', age: 25 },
  { name: 'Jhon', age: 21 },
  { name: 'Doe', age: 34 }
]

let symbolArray = Users.map(o => Symbol(o.name));

function getRepeatedSymbols(symbolArray) {
  let destructuredUsers = {};
  symbolArray.forEach((o, i) => destructuredUsers[o] = Users[i]);
  return destructuredUsers;
}

symbolArray.forEach(o => console.log(getRepeatedSymbols(symbolArray)[o].age))

