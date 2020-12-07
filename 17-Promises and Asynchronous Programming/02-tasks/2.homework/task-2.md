### Task 4

Create class `Countries` that during creating instance, waits for one parameter as a string. This parameter will be API end point.

Class `Countries` should contain one method `send` that returns promise.

Method `send` waits for one parameter, that should be with type `number` and after we'll use this value as parameter `size` in `GET`.

**ATTENTION**:

1. The method `send` **HAS TO BE** promise.
2. Using `async & await` inside class **PROHIBITED**.
3. Using third party libraries (except `fetch`) **PROHIBITED**.
4. If server send response with status code `200` promise **HAS TO BE** return array with list of country objects.
5. If server send response with status code non `200` promise **HAS TO BE** rejected with text `We have error, status code: ${statusCode}`.
6. Throw error if `url` isn't string type.
7. Throw error if pass as parameter not a number for method `send`.

**Example**:

```javascript
const get = require('fetch').fetchUrl;

const url = 'https://lab.lectrum.io/geo/api/countries';
const countries = new Countries(url);

(async() => {
    try {
        const data = await countries.send(2);
        console.log(data); // array of countries
    } catch (error) {
        console.log(error);
    }
})();
```
