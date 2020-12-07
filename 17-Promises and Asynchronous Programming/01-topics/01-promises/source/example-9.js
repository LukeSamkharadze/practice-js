const Async = () => {
    return new Promise(resolve => {
        console.log('Promise init'); // 1) Promise init
        setTimeout(() => {
            console.log('resolving...'); // 3) resolving...
            resolve();
        }, 2000);
    });
};

Async()
    .then(() => {
        console.log('Step 1'); // 4) Step 1
        return 777;
    })
    .then(value => {
        console.log('Step 2'); // 5) Step 2
        console.log(value); // 6) 777
    });
console.log('Next step'); // 2) Next step