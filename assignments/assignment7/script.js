"use strict";

var rudyTimer = (function () {
    console.log("Rudy timer");
    var timer = null;
    var rudy = function () {
        document.getElementById("output").innerHTML += " Rudy!";
    }
    return function () {
        if (timer == null) {
            timer = setInterval(rudy, 1000);
        }
        else {
            clearInterval(timer);
            timer = null;
        }
    }

})();
