let options = {
    repeat: true,
    save: false
};

let repeat = false;
let save = true;

console.log('repeat before:', repeat);
console.log('save before:', save);

({ repeat, save } = options);

console.log('repeat:', repeat);
console.log('save:', save);