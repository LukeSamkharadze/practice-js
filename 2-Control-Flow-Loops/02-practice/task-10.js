let arr = [1, -2, 5, 9, 4, 13, 4, 10];

for (let i = 0; i < arr.length; i++)
    for (let j = i; j > 0; j--)
        if (arr[j] > arr[j - 1]) {
            let tmp = arr[j];
            arr[j] = arr[j - 1];
            arr[j - 1] = tmp;
        }

console.log(arr);