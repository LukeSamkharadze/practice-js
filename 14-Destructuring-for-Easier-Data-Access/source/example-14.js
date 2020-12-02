let options = {
    repeat: true,
    save: false,
    user: {
        name: {
            en: 'Elizabeth'
        }
    }
};

const { user: { name: { en: name } }  } = options;
console.log(name);
