function searchWord(string, searchString) {
  if (typeof string !== 'string' || typeof searchString !== 'string')
    throw new Error("Both parameterss must be a string");

  return string.match(/\w+/g).filter(o => o === searchString).length;
}

console.log(searchWord('The quick brown fox', 'fox'));
console.log(searchWord('aa, bb, cc, dd, aa', 'aa'));
