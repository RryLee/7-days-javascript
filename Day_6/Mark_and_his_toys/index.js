function processData(input) {
    var rows = input.split('\n');
    var money = rows[0].split(' ').pop();
    var prices = rows[1].split(' ').sort((a, b) => a - b);

    var number = 0;

    while (money >= 0) {
        money -= prices[number];
        number ++;
    }

    console.log(-- number);
}
