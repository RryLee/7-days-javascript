for (var i = 0; i < 9; i++) {
    var str = '';
    var space = (7 - i);

    if (i == 0) {
        str += ' '.repeat(space + 1) + '*\n';
    }

    str += ' '.repeat(space + 1);
    var zero = 2 * i + 1;
    str += '0'.repeat(zero);

    console.log(str);
}
