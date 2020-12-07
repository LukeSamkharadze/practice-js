const Async1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('First promise');
        reject(1);
    }, 1000);
});

const Async2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Second promise');
        reject(2);
    }, 1000);
});

Promise.all([Async2, Async1]).then(
    (n) => {
        console.log(n);
        console.log('Ok');
    },
    (n) => {
        console.log(n);
        console.log('Nope');
    }
);