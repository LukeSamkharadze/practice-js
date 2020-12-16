const Async = () => {
    return new Promise((resolve, reject) => {
        console.log('Promise init'); // 1) Promise init
        setTimeout(() => {
            console.log('In promise'); // 2) In promise
            resolve((() => {
                return new Promise((resolve, reject) => {
                    reject('Error');
                });
            })());
        }, 2000);
    });
};
Async()
    .then(() => {
       console.log('Ok');
    }, (message) => {
        console.log('Nope: ' + message); // 3) Nope: Error
    });