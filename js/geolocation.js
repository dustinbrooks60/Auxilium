let count = 0;
let word;
let buttons = document.getElementsByClassName("button");

function obtainWord() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function(){
            word = buttons[i].innerText;
        }
    }
}

function writeLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
}

function showPosition(position){
    let userid = "user" + count;
    let dbRef = firebase.database().ref().child("users/" + userid);
    let data = {};
    data.latitude = position.coords.latitude;
    data.longitude = position.coords.longitude;
    data.status = "help";
    dbRef.set(data);
    count++
}