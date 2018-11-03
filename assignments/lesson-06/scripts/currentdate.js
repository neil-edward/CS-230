function currentDate() {
    var d = new Date();
    var weekday = new Array(7);
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var n = weekday[d.getDay()];
    document.getElementById("currentDate").innerHTML = n + ", " + d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear() ;
}