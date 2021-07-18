#### Task 1

Add the non-enumerable method `mergeDeepRight()` to `Object.prototype`. This method extends the source object by copying properties from the object passed in the argument. This method copies only the value of the properties, but does not copy the attributes (descriptors).

Only own properties are copied from the object in the argument (even those that are not available for enumeration).

If there are properties that already exist in the source object, their values are replaced by the values from the object passed in the argument.

If a property is object, it must also be copied along with nested data, nesting can be any.

```javascript
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

// data will be
{
	name: 'fred',
	age: 40,
	contact: {
		email: 'baa@example.com',
        favorite: true,
		meta: {
            verified: true,
            tags: ['vip', 'important']
        }
	}
}
```



