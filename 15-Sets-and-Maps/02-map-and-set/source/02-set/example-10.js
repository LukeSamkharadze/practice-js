const removeDuplicates = arr => [...new Set(arr)];

const numbers = [1, 2, 3, 3, 3, 3];

console.log(numbers);
console.log(removeDuplicates(numbers));
