let options = {
    repeat: true,
    save: false,
    user: {
        name: {
            en: 'Elizabeth'
        }
    }
};

let { user: { name: { en } }  } = options;
console.log(en);
