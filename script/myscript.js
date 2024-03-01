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
function addLink() {
    //Get the selected text and append the extra info
    var selection = window.getSelection(),
    pagelink = '<br /><br /> Nguồn : Dương Nhật Anh' + '<br />Nar/Katorivn - Software engineering(Game Developer)', // Change this text
    copytext = selection + pagelink,
    newdiv = document.createElement('div');
   
    //hide the newly created container
    newdiv.style.position = 'absolute';
    newdiv.style.left = '-99999px';
   
    //insert the container, fill it with the extended text, and define the new selection
    document.body.appendChild(newdiv);
    newdiv.innerHTML = copytext;
    selection.selectAllChildren(newdiv);
   
    window.setTimeout(function () {
    document.body.removeChild(newdiv);
    }, 100);
    }
   
    document.addEventListener('copy', addLink);