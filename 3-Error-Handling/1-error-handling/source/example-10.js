function notifier(status, message) {
  if (status === 'warning') {
    throw new Error('warning');
  } else if (status === '911') {
    throw new Error('911');
  } else if (status === 'inform') {
    console.log(message);
  }
};

try {
  notifier('inform', 'We have some information');
} catch(err) {
  if (err.message === '911') {
    throw err;
  } else {
    console.log('Attention: ' + err.message + '!');
  }
}

console.log(1);