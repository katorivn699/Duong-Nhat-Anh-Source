function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
        h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 1000);
}

function startDate() {
    var today = new Date();
    var d = today.getDate();
    var month = today.getMonth() + 1;
    var y = today.getFullYear();
    d = checkDate(d);
    document.getElementById('date').innerHTML = "Date: " + d + "/" + month + "/" + y;
    var t = setTimeout(startDate, 10000)
}

function checkDate(i) {
    if (i < 10) { i = "0" + i };
    return i;
}
function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}
