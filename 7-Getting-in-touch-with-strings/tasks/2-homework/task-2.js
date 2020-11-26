function extractCurrencyValue(string) {
  if (typeof string !== 'string')
    throw new Error("Parameter must be a string");

  if (string.length >= 1 && string.charCodeAt() >= "1".charCodeAt() && string.charCodeAt() <= "9".charCodeAt()) {
    if (string.split("").every(o => o.charCodeAt() >= "0".charCodeAt() && o.charCodeAt() <= "9".charCodeAt()))
      return parseInt(string);
  }
  else if (string.length !== 1 && string.substr(1).split("").every(o => o.charCodeAt() >= "0".charCodeAt() && o.charCodeAt() <= "9".charCodeAt()))
    return parseInt(string.substr(1));

  throw new Error("Parameter has not a proper value");
}

console.log(extractCurrencyValue("$120"));