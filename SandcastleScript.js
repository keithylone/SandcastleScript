// Code again from Xenko

var Game = {};


Game.Beep = new Audio("http://keithylone.github.io/beep.mp3");
	Game.Beep.volume = 1;


Game.RedundaKitty = function() {
	document.title = Molpy.Redacted.toggle - Molpy.Redacted.countup;
	if (Molpy.Redacted.location > 0) {
		Game.Beep.play();
	}
}

//Main Program and Loop
function MainProgram() {
	Game.RedundaKitty();
	Game.StartLoop();
}

Game.StartLoop = function () {
	Game.Timeout = setTimeout(MainProgram, 900);
}

console.log("Hi");
Beachball.MainProgram();
