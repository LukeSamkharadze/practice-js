class Users
{
  map = new Map();

  add(object)
  {
    this.map.set(object,object);
    return object;
  }

  getAge(object)
  {
    return this.map.get(object).age;
  }
}

const users = new Users();
const user = users.add({name:'gio', age: 22});
console.log(users.getAge(user)); // 22