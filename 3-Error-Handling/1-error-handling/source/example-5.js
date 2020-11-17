try {
    throw new Error('We have some problem');
} catch(err) {
    console.log(err.name);
    console.log(err.message);
    console.log(err.stack);
}
