function Async() {
    const promise = new Promise(function (resolve, reject) {
        console.log('Promise init'); // 1) Promise init
        setTimeout(function() {
            console.log('Resolving...'); // 3) Resolving...
            resolve();
        }, 2000);
    });
    return promise;
}

const promise = Async();

promise.then(function() {
    console.log('Fulfilled'); // 4) Fulfilled
}, function() {
    console.log('Rejected');
});

console.log('Next step'); // 2) Next step