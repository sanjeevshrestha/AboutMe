"use script";
function calcTip() {

    var subtotal = parseFloat(document.getElementById("subtotal").value);
    var tip = parseFloat(document.getElementById("tip").value);
    if (!(subtotal && tip)) {
        alert("Something went wrong! Please enter numeric value for Subtotal and Tip");
        return;
    }
    var total = subtotal + subtotal * (tip / 100);
    var totalControl = document.getElementById("total");

    totalControl.innerHTML = "$" + total.toFixed(2);
    totalControl.style.color = "red";
}


var bindControls = function () {

    document.getElementById("btnCalculate").onclick = calcTip;
}

window.onload = bindControls;