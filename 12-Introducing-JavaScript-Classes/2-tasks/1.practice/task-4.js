class MyString {
  reverse(text) {
    return text.split("").reverse().join("");
  }

  ucFirst(text) {
    return text[0].toUpperCase() + text.substr(1);
  }

  ucWords(text) {
    return text.split(" ").map(this.ucFirst).join(" ");
  }
}

var str = new MyString();

console.log(str.reverse('abcde')); // print 'edcba'
console.log(str.ucFirst('abcde')); // print 'Abcde'
console.log(str.ucWords('abcde abcde abcde')); // print 'Abcde Abcde Abcde'