// Roy McElmurry
// Alarm clock of awesomeness

"use strict";

var Alarm = function () {

	var me = this;
	var min = 0;
	var sec = 0;
	var timer = null;

	me.countdown = function () {
		if (timer == null) {
			min = document.getElementById('min').value;
			sec = document.getElementById('sec').value;
			timer = setInterval(me.decrement, 1000);
			document.getElementById('go').disabled = true;
			document.body.style.backgroundColor = "inherit";

		}
	}


	me.decrement = function () {
		if (sec > 0) {
			sec--;
		} else if (min > 0) {
			min--;
			sec = 59;
		} else {
			clearInterval(timer);
			document.getElementById('go').disabled = false;

			timer = null;
			document.body.style.backgroundColor = "red";
		}

		document.getElementById('min').value = min;
		document.getElementById('sec').value = sec;
	}

}


var alarm = new Alarm();
window.onload = function () {
	console.log('Binding...');
	console.log(alarm);
	document.getElementById('go').onclick = alarm.countdown;
};