const https = require('https');

https.get('https://jsonplaceholder.typicode.com/users', response => {
    console.log(response.statusCode);
});
