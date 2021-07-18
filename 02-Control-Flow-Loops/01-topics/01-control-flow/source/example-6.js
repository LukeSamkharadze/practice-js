var color = 'green'; // 'red', 'yellow', 'green'

switch(color) {
    case 'red':
        console.log('STOP');
    case 'yellow':
        console.log('1 MIN');
        break;
    case 'green':
        console.log('START');
        break;
    default:
        console.log('I don\'t know this color!');
}