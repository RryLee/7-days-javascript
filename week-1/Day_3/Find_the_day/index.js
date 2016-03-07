function findDay(myDate) {
    // Return day for date myDate(MM/DD/YYYY)
    // Note that myDate contains the date in string format
    var d = new Date(myDate);
    var weekday = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

    console.log(weekday[d.getDay()]);
}
