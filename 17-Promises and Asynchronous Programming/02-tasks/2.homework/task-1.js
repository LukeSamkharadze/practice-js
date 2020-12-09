const get = require('fetch').fetchUrl;

function send(url) {
  return new Promise((resolve, reject) => {
    get(url, (error, meta, body) => {
      if (meta.status !== 200)
        reject(`We have error, status code: ${meta.status}`);
      resolve(JSON.parse(body));
    }
    )
  })
}

const url = 'https://lab.lectrum.io/geo/api/countries?size=2';
send(url)
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });