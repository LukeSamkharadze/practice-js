let options = {
    repeat: true,
    save: false,
    user: {
        name: {
            en: 'Elizabeth'
        }
    }
};

let { user: { name: { en: name } }  } = options;
console.log(name);
