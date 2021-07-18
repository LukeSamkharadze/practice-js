const person = {
}

const full = 'full'
const name = 'name'

person[`${full} ${name}`] = 'John Wick'

console.log(person['full name']);
console.log(person['Full Name']);