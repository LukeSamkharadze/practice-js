Object.defineProperty(Object.prototype, "mergeDeepRight", {
  value: function (o) {
    Object.getOwnPropertyNames(o).forEach(p => {
      if (Array.isArray(this[p]) && Array.isArray(o[p]))
        this[p] = o[p].concat(this[p]);
      else if (typeof this[p] === 'object' && typeof o[p] === 'object')
        this[p].mergeDeepRight(o[p]);
      else
        this[p] = o[p];
    })
  },
  enumerable: false
});

const data = {
  name: 'fred',
  age: 10,
  contact: {
    email: 'moo@example.com',
    meta: {
      verified: true,
      tags: ['important']
    }
  }
};

data.mergeDeepRight({
  age: 40,
  contact: {
    email: 'baa@example.com',
    favorite: true,
    meta: {
      tags: ['vip']
    }
  }
});

console.log(data);
console.log(data.contact.meta.tags);