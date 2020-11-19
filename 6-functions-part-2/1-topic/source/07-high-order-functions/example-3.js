function repeat(n, action) {
    for (let i = 0; i < n; i++) {
      action(i);
    }
}

function addToArray(item, arr) {
    arr.push(item);
}

repeat(3, console.log);

let arr = [];

repeat(3, (item) => {
    addToArray(item, arr);
});

console.log(arr);