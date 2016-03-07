function processData(input) {
    var lines = input.split("\n");
    var row = lines[0];
    var column = lines[1];
    var arr = [];
    var index = 2;

    while(row - arr.push(lines[index].split(' ')) > 0) {
        index ++;
    }

    var counts = [];

    for (var i = 0; i < row; i ++) {
        for (j = 0; j < column; j ++) {
            if(arr[i][j] == 1){
                counts.push(findN(i, j, row, column, arr));
            }
        }
    }

    var result = 0;

    for(var i = 0; i < counts.length; i++){
        if(counts[i] >= result){
            result = counts[i];
        }
    }

    console.log(result);
}

function findN (r, c, maxr, maxc, lelarray) {
    if(r >= maxr) r = maxr-1;
    if(c >= maxc) c = maxc-1;
    if(r < 0) r = 0;
    if(c < 0) c = 0;

    count = 0;
    var val = lelarray[r][c];
    if(val == -69) return 0;
    if(val == 0) return 0;
    if(val == 1){
        count++;
        lelarray[r][c] = -69;

        count += findN(r+1, c, maxr, maxc, lelarray);
        count += findN(r-1, c, maxr, maxc, lelarray);
        count += findN(r, c+1, maxr, maxc, lelarray);
        count += findN(r, c-1, maxr, maxc, lelarray);
        count += findN(r+1, c+1, maxr, maxc, lelarray);
        count += findN(r-1, c-1, maxr, maxc, lelarray);
        count += findN(r-1, c+1, maxr, maxc, lelarray);
        count += findN(r+1, c-1, maxr, maxc, lelarray);
    }
    return count;
}
