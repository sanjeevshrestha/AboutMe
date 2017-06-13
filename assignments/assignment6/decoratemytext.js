"use strict";

var alertMe = function () {
    alert("Hello, World");

}

/**
 * 
 */
var increaseFontSize = function () {
    var objTextarea = document.getElementById("txtTextarea");
    var fontSize = window.getComputedStyle(objTextarea, null).getPropertyValue("font-size");
    document.getElementById("txtTextarea").style.fontSize = (parseInt(fontSize) + 2) + "px";
}

/**
 * 
 * @param {*} text 
 */
var pigLatinize = function (text) {
    var textArray = text.trim().split(" ");
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var retTextArray = textArray.map(str => {
        if (vowels.indexOf(str[0]) > -1) {
            return str + 'ay';
        }
        else {
            var firstChar = str.split("").shift();
            return str.substr(1) + firstChar + "ay";
        }
    })
    return retTextArray.join(" ");
}


/**
 * 
 * @param {*} text 
 */
var malkovitch=function(text){
return  text.replace(/(\w{5,})/g, "Malkovitch");
}

var bindControls = function () {
    document.getElementById("btnBiggerDecorations").onclick = function () {

        increaseFontSize();
        window.setInterval(increaseFontSize, 5000);
    }

    document.getElementById("chkBling").onchange = function (event) {
        if (event.target.checked) {
            document.getElementById("txtTextarea").style.fontWeight = "bold";
            document.getElementById("txtTextarea").style.color = "green";
            document.getElementById("txtTextarea").style.textDecoration = "underline";
            document.body.style.backgroundImage = "url(./hundred-dollar-bill.jpg)";
        }
        else {
            document.getElementById("txtTextarea").style.fontWeight = "normal";
            document.getElementById("txtTextarea").style.color = "inherit";
            document.getElementById("txtTextarea").style.textDecoration = "inherit";
            document.body.style.backgroundImage = "none";

        }
    };

    document.getElementById("btnPiglatin").onclick = function () {
        var text = document.getElementById("txtTextarea").value;
        document.getElementById("txtTextarea").value = pigLatinize(text);
    }

     document.getElementById("btnMalkovitch").onclick = function () {
        var text = document.getElementById("txtTextarea").value;
        document.getElementById("txtTextarea").value = malkovitch(text);
    }
}

window.onload = bindControls;