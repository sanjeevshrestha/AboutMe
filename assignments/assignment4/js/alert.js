"use strict";

function alertTime() {
    var date = new Date();
    alert("Current Time is : " + date.getHours() + ":" + date.getMinutes());
}

function alertDate() {
    var months = ["January", "February", 'March', "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var date = new Date();
    var supscriptArray = ["st", "nd", "rd", "th"];
    var dayMonth = date.getDate().toString();
    var lastDigit = dayMonth.substr(-1, 1);
    var supscript = "th";
    if (lastDigit <= 3) {
        supscript = supscriptArray[lastDigit - 1];
    }
    else {
        supscript = supscriptArray[supscriptArray.length - 1];
    }

    alert("Today is : " + date.getDate() + supscript + " of " + months[date.getMonth()]);
}


function alertMyName(){
    alert("My Name is...");
    alert("My Name is...");
    alert("My Name is...");
    alert("Slim Shady!!!");
    alert("No, Just Kidding!!");
    alert("My name is Sanjeev");

}
