class Validator {
  isEmail(email) {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);
  }

  isDomain(domain) {
    return /(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/g.test(domain);
  }

  isDate(date) {
    return /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/g.test(date);
  }

  isPhone(number) {
    return /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/g.test(number) ||
      /^(\+\d{1,3}\s?)?1?\-?\.?\s?\(?\d{2}\)?[\s.-]?\d{3}[\s.-]?\d{2}[\s.-]?\d{2}$/g.test(number)
  }
}

var validator = new Validator();

console.log("Mail")
console.log(validator.isEmail('jshtml@mail.ru'));
console.log(validator.isEmail('jshtml1@gmail.com'));
console.log(validator.isEmail('jsh.tml1@gmail.com'));
console.log("");

console.log("Domain");
console.log(validator.isDomain('jshtml.net'));
console.log(validator.isDomain('jshtml.com'));
console.log(validator.isDomain('www.jshtml.com'));
console.log("");


console.log("Date");
console.log(validator.isDate('12.05.2020'));
console.log(validator.isDate('12/05/2020'));
console.log(validator.isDate('12-05-2020'));
console.log("");

console.log("Phone");
console.log(validator.isPhone('+375 (29) 817-68-92'));
console.log(validator.isPhone('+375298176892'));
console.log(validator.isPhone('+91 (123) 456-7890'));
console.log(validator.isPhone('1-718-444-1122'));
console.log(validator.isPhone('718-444-1122'));