const f = async () => {
    return 1;
};

const promise = f();

promise.then((i) => {
   console.log(i); // 1
});