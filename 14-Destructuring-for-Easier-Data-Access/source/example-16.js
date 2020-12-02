let options = {
    repeat: true,
    save: false,
    user: {
        name: {
            ru: 'Elizabeth'
        }
    }
};

let { user: { firstName: { en: name } }  } = options;
console.log(name);
