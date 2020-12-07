### Task 1

Create the function `send` that will be wrapper for function `get` which support only `callback` approach.

**ATTENTION**:

1. The function `send` **HAS TO BE** promise.
2. Using `async & await` **PROHIBITED**.
3. Using third party libraries (except `fetch`) **PROHIBITED**.
4. If server send response with status code `200` promise **HAS TO BE** resolved with parameter. This parameter is an array that contains a list of country objects.
5. If server send response with status code non `200` promise **HAS TO BE** rejected with text `We have error, status code: ${statusCode}`

**Before refactoring**:

```javascript
const get = require('fetch').fetchUrl;

const url = 'https://lab.lectrum.io/geo/api/countries?size=2';
get(url, (error, meta, body) => {
	const { data } = JSON.parse(body);
	console.log(data);
});
```

**After refactoring**:

```javascript
const get = require('fetch').fetchUrl;
const url = 'https://lab.lectrum.io/geo/api/countries?size=2';

send(url)
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });
```

