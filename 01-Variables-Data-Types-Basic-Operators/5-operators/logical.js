// && || ! | &

function Do() {
    console.log('doing something');
    return false;
}

if (true | Do()){
    console.log('YES')
}

if (false & Do()){
    console.log('YES')
}