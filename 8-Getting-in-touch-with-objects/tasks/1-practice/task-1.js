let person =
{
  get salary() {
    if (new Date(2020, new Date().getMonth(), 0).getDate() - new Date().getDate() > 20)
      return "good salary";
    else
      return "bad salary";
  }
}

console.log(person.salary)