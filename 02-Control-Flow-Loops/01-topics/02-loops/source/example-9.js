var arr = [1, 2, 3];

var i;
for (i in arr) {
    var itemType = typeof i;
    console.log(`${ itemType }: ${ i }`);
}