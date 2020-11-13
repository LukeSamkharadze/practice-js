function print(message) {
    if (typeof message === 'string') {
        console.log(message);
    } else {
        throw new Error('message type is not a string');
    }
};

print('Hello');
print(6);
print('Wow');