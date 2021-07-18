try {
    setTimeout(function() {
        throw new Error('Some text');
    }, 0);
} catch (e) {
    console.log(e.name);
}
console.log(1);