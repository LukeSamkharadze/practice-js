const Async = () => {
    return new Promise((resolve, reject) => {
        console.log('Promise init'); // 1) Promise init
        setTimeout(() => {
            console.log('Rejecting...'); // 3) Rejecting...
            reject('Network Error');
        }, 2000);
    });
};

Async()
    .catch((message) => {
        console.log('Something is wrong: ' + message); // 4) Something is wrong: Network Error
    });
console.log('Next step'); // 2) Next step