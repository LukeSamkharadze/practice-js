var arr = [1, 2, 5];

var i;
for (i of arr) {
    var itemType = typeof i;
    console.log(`${ itemType }: ${ i }`);
}