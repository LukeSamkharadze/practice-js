function repeat(n, action, then) {
    for (let i = 0; i < n; i++) {
      const result = action(i);
      then(result);
    }
}

function addToArray(item, arr) {
    arr.push(item);
}

let arr = [];

repeat(3, (item) => {
    addToArray(item, arr);

    return arr.length;
}, (length) => {
    console.log(`length: ${length}`)
});