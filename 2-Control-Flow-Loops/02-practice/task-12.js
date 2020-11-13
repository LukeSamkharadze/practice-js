let arr = [1, -2, 5, 9, 4, 13, 4, 10];

let sum = 0;

for (let i of arr)
    if (i > 0)
        sum += i;

console.log(sum);