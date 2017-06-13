"use strict";
(function (w, doc, undefined) {
    var RudyMsgr = function () {
        var timer = null;
        var rudy = function () {
            doc.getElementById("output").innerHTML += " Rudy!";
        }
        return {
            delayMsg: function () {
                if (timer == null) {
                    timer = setInterval(rudy, 1000);
                }
                else {
                    clearInterval(timer);
                    timer = null;
                }
            }
        }
    };

    var rudyMsgr = new RudyMsgr();
    w.onload = function () {
        doc.getElementById("btnClick").onclick = rudyMsgr.delayMsg;
    }
})(window, document);
