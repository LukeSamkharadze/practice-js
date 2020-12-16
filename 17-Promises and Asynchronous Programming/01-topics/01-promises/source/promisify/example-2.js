const https = require('https');

const getData = url =>
    new Promise((resolve, reject) => {
        https.get(url, response => {
            if (response.statusCode == 200) {
                reject('error');
                // resolve('success');
            }

            // reject('error');
        });
    });

getData('https://jsonplaceholder.typicode.com/users')
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log('Ошибка');
    });
