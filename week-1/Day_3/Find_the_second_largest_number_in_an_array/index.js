function processData(myArray) {
    var max = Math.max.apply(null, myArray);

    console.log(Math.max.apply(null, myArray.filter(a => a != max)));
}
