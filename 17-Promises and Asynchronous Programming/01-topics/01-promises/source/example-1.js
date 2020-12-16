const promise = new Promise(function(resolve, reject) {
    console.log('Promise'); // 1) Promise
    resolve();
});

promise.then(function() {
    console.log('Resolved'); // 3) Resolved
});