function repeat(n, action) {
    for (let i = 0; i < n; i++) {
      action(i);
    }
}

// repeat(3, console.log);

let arr = [];

repeat(3, (item) => {
    arr.push(item);
});

console.log(arr);