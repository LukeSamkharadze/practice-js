function Async() {
    const promise = new Promise(function (resolve, reject) {
        console.log('Promise init'); // 1) Promise init
        setTimeout(function() {
            console.log('rejecting...'); // 3) rejecting...
            reject('Network Error');
        }, 2000);
    });
    return promise;
}

const promise = Async();
promise.then(function() {
    console.log('Fulfilled');
}, function(message) {
    console.log('Rejected: ' + message); // 4) Rejected
});
console.log('Next step'); // 2) Next step