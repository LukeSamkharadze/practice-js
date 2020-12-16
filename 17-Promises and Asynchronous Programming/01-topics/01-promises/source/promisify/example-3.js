const https = require('https');

const getData = url =>
    new Promise((resolve, reject) => {
        https.get(url, response => {
            if (response.statusCode) {
                resolve(response);
            }

            reject('error');
        });
    });

(async () => {
    try {
        const data = await getData(
            'https://jsonplaceholder.typicode.com/users'
        );

        console.log(data);
    } catch (error) {
        console.error(error.message);
    }
})();
