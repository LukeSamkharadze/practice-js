const mixer = (...functions) => {
    for (const f of functions) {
        f();
    }
};

mixer(() => {
    console.log(1);
}, () => {
    console.log(2);
}, () => {
    console.log(3);
})