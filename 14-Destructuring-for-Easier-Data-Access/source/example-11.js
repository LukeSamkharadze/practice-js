let options = {
    repeat: true,
    save: false,
    user: {
        name: 'Elizabeth',
        age: {
            part: 21
        }
    }
};
// let name = options.user.name;
// let part = options.user.age.part;
// let meta = options.user.age.meta || 'text';
let { user: { name, age: { part, meta = 'text' } }  } = options;

console.log(name);
console.log(part);
console.log(meta);
