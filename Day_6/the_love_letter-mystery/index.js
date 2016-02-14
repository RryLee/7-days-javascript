function processData(input) {
    var lines = input.split('\n');
    var n = parseInt(lines[0]);

    for (var i = 1; i <= n; i ++) {
        var count = 0;
        var current_string = lines[i];
        var s = 0;
        var l = current_string.length - 1;

        while(s <= l) {
            count += Math.abs(current_string.charCodeAt(l) - current_string.charCodeAt(s));
            s ++;
            l --;
        }

        console.log(count);
    }
}
