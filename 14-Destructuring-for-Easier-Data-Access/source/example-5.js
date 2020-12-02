const testOptions = (value) => {
    console.log(value)
}

const data = {
    status: true,
    age: 1
};

let status = false;
let age = 2;

testOptions({ status, age } = data);

console.log(status);
console.log(age);