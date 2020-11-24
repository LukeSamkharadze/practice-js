function extractCurrencyValue(string) {
  if (typeof string !== 'string')
    throw new Error("Parameter must be a string");

  if (string.charCodeAt(0) >= "1".charCodeAt(0) && string.charCodeAt() <= "9".charCodeAt(0))
    return parseInt(string);
  else
    return parseInt(string.substr(1));
}

console.log(extractCurrencyValue('$120'));