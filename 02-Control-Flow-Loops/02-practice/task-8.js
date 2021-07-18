let arr = [1, 2, 3, 4];

let sum = 0;

for (let i of arr)
    if (i % 2 == 1 && i > 3)
        sum += i;

console.log(sum);