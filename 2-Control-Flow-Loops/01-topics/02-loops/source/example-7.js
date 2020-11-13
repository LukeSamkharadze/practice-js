
someLabel: for (var i = 0; i < 10; i++) {
    if (i === 6) {
        continue someLabel;
    }
    console.log(i);
}
