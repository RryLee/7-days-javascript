function vowelsAndConsonants(s) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var length = s.length;
    var output = [];

    for (var i = 0; i < length; i ++) {
        if (vowels.indexOf(s[i]) !== -1) {
            output.push(i);
            console.log(s[i]);
        }
    }

    for (var i = 0; i < length; i ++) {
        if (output.indexOf(i) == -1) {
            console.log(s[i]);
        }
    }
}

// onthing. input
process.stdin.resume();
process.stdin.setEncoding("ascii");

var input = "";

process.stdin.on("data", function (line) {
    input += line;
});

process.stdin.on("end", function () {
     vowelsAndConsonants(input);
});
