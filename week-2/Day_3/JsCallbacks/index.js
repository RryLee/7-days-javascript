function myFilter(my_array, callback){
    //Enter your code here
    var results = [];

    my_array.forEach((a) => {
        if(callback(a)) {
            results.push(a);
        }
    });

    return results;
}


function processData(inputArray) {
    console.log(myFilter(inputArray, (a) => a % 2 == 0));
}

