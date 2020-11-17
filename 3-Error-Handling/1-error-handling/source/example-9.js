try {
  throw new Error('important');
} catch(err) {
  if (err.message === 'important') {
    throw err;
  } else {
    console.log(err.message);
  }
}
console.log(1);