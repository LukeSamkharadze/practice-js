const get = require('fetch').fetchUrl;

class Countries {
  constructor(url) {
    if (typeof url !== 'string') throw new Error("URL is not string")
    this._url = url;
  }

  send(numCountries) {
    if (typeof numCountries !== 'number') throw new Error("numCountries is not numbeer")
    return new Promise((resolve, reject) => {
      get(`${this._url}?size=${numCountries}`, (error, meta, body) => {
        if (meta.status !== 200)
          reject(`We have error, status code: ${meta.status}`);
        resolve(JSON.parse(body));
      }
      )
    })
  }
}

const url = 'https://lab.lectrum.io/geo/api/countries';
const countries = new Countries(url);

(async () => {
  try {
    const data = await countries.send(2);
    console.log(data); // array of countries
  } catch (error) {
    console.log(error);
  }
})();