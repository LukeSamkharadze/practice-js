let options = {
    repeat: true,
    save: false,
    user: {
        name: {
            ru: 'Elizabeth'
        }
    }
};

let { user: { name: { en: name } }  } = options;
console.log(name);
