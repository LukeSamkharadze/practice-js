class DB {
  #data = new Map();
  #id = 0;

  static #props = new Map([["name", "string"], ["age", "number"], ["country", "string"], ["salary", "number"]]);
  static #queryProps = new Map([["min", "number"], ["max", "number"]]);

  static #IsPropsValid(personProps) {
    return Object.getOwnPropertyNames(personProps).every(o => DB.#props.has(o) && DB.#props.get(o) === typeof personProps[o]);
  }
  static #IsPersonValid(person) {
    return Object.getOwnPropertyNames(person).every(o => DB.#props.has(o)) &&
      Array.from(DB.#props.keys()).every(o => Object.getOwnPropertyNames(person).includes(o)) &&
      DB.#IsPropsValid(person);
  }
  static #IsQueryValid(query) {
    return Object.getOwnPropertyNames(query).every(o => {
      if (!DB.#props.has(o))
        return false;
      if (typeof query[o] === 'number' || (typeof query[o] === 'object' && DB.#props.get(o) === 'string'))
        return false;
      if (typeof query[o] === 'object')
        return Object.getOwnPropertyNames(query[o]).every(oo => DB.#queryProps.has(oo) && DB.#queryProps.get(oo) === typeof query[o][oo]) &&
          Array.from(DB.#queryProps.keys()).some(oo => Object.getOwnPropertyNames(query[o]).includes(oo));

      return true;
    });
  }

  #GetNewID() {
    return (this.#id++).toString();
  }

  create(person) {
    if (arguments.length !== 1)
      throw new Error("Arguments count not met");
    if (!DB.#IsPersonValid(person))
      throw new Error("Person is not valid");

    let ID = this.#GetNewID();
    this.#data.set(ID, person);
    return ID;
  }

  read(ID) {
    if (arguments.length !== 1)
      throw new Error("Arguments count not met");
    if (typeof ID !== 'string')
      throw new Error("ID is not string");
    if (this.#data.has(ID)) {
      this.#data.get(ID).id = ID;
      return this.#data.get(ID);
    }

    return null;
  }

  readAll() {
    if (arguments.length !== 0)
      throw new Error("Arguments count not met");

    return Array.from(this.#data.values());
  }

  update(ID, personProps) {
    if (arguments.length !== 2)
      throw new Error("Arguments count not met");
    if (typeof ID !== 'string')
      throw new Error("ID is not string");
    if (!DB.#IsPropsValid(personProps))
      throw new Error("The props is not valid");
    if (!this.#data.has(ID))
      throw new Error("The ID is non-existing");

    Object.assign(this.#data.get(ID), personProps);
  }

  find(query) {
    if (arguments.length !== 1)
      throw new Error("Arguments count not met");
    if (!DB.#IsQueryValid(query))
      throw new Error("Query is not valid");

    return Array.from(this.#data.values()).filter(o => Object.getOwnPropertyNames(query).every(oo => (typeof query[oo] === 'string') ? query[oo] === o[oo] :
      (query[oo].min === undefined || query[oo].min <= o[oo]) && (query[oo].max === undefined || query[oo].max >= o[oo])));
  }

  delete(ID) {
    if (arguments.length !== 1)
      throw new Error("Arguments count not met");
    if (typeof ID !== 'string')
      throw new Error("ID is not string");
    if (!this.#data.has(ID))
      throw new Error("The ID is non-existing");

    this.#data.delete(ID);
    return true;
  }
}







const db = new DB();

console.log("===== CREATE =================================");
const person = {
  name: 'Saba',
  age: 21,
  country: 'ge',
  salary: 500
};
const person2 = {
  name: 'Luka',
  age: 21,
  country: 'ge',
  salary: 5000
};
const person3 = {
  name: 'EZEZ',
  age: 21,
  country: "us",
  salary: 5000
};
const id1 = db.create(person);
const id2 = db.create(person2);
const id3 = db.create(person3);
console.log(id1);
console.log(id2);
console.log(id3);
console.log("==============================================\n");

console.log("===== READ ===================================");
console.log(db.read(id1));
console.log(db.read(id2));
console.log(db.read(id3));
console.log("==============================================\n");

console.log("==== UPDATE ==================================");
db.update(id1, { age: 10 });
console.log(db.read(id1), "<------- Changed age");
console.log("==============================================\n");

console.log("==== DELETE ==================================");
console.log(id1, db.delete(id1))
console.log("==============================================\n");

console.log("=== READ ALL =================================");
console.log(db.readAll());
console.log("==============================================\n");

console.log("===== FIND ===================================");
const query = {
  country: 'ge',
  age: {
    min: 21
  },
  salary: {
    min: 300,
    max: 6000
  }
};
const customers = db.find(query);
console.log(customers);
console.log("==============================================\n");