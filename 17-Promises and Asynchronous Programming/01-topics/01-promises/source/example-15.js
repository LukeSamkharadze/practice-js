const Async1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('First promise');
        resolve(1);
    }, 4000);
});

const Async2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Second promise');
        resolve(2);
    }, 1000);
});

Promise.all([Async2, Async1]).then(
    (n) => {
        console.log(n);
    },
    () => {
        console.log('Nope');
    }
);