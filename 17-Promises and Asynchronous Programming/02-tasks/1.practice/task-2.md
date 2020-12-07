### Task 2

Create the function `getCustomers` that can merge 2 arrays with objects.

The merge operation is performed by the key `id` and only for objects that have the flag `verified: true`.

**ATTENTION**:

1. The function `getCustomers` **HAS TO BE** promise.
2. Using `async & await` **PROHIBITED**.
3. Using third party libraries **PROHIBITED**.
4. If array `countries` doesn't have required `id`, promise **HAS TO BE** rejected with text `We don't have information about country for this customer: ${customer.name}`
5. Merge is possible **ONLY** for objects with flag `verified: true`.

**Example**:

```javascript
const customers = [
    {
        id: 'A1',
        name: 'Oliver',
        verified: true
    },
    {
        id: 'A2',
        name: 'alex'
    }
];

const countries = [
    {
        id: 'A1',
        country: 'usa'
    },
    {
        id: 'A2',
        country: 'poland'
    }
];

getCustomers(customers, countries)
    .then((customers) => console.log(customers))
    .catch(error => console.log(error))
```

