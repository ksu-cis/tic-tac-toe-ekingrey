// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

var currentTurn = "X";

document.getElementById("turn").innerText = "It is Player " + currentTurn + "'s turn";

var squares = document.getElementsByClassName("square");

for (var i = 0; i < squares.length; i++) {
	squares[i].addEventListener("click", onClick);


}

function onClick() {
	event.preventDefault();
	if (!event.target.innerText) {
		event.target.innerText = currentTurn;
		nextTurn();
	}
	
	
}

function nextTurn() {
	//if (!checkForWin) {
	//checkForWin();
		if (currentTurn === "X") {
			currentTurn = "O";
		}
		else {
			currentTurn = "X";
		}
	//}
	
	
}

function declareWinner() {
	document.getElementById("turn").innerText = "Player" + currentTurn + " wins";
}

function checkForWin() {
	for (var i = 0; i < 9; i += 3) {
		if (square[i].innerText && squares[i].innerText === squares[i+1].innerText && squares[i].innerText === squares[i+2].innerText) {
			declareWinner();
			return true;
		}
	}

	// check columns
	for (var j = 0; j < 3; j += 1) {
		if (square[j].innerText && squares[j].innerText === squares[j + 3].innerText && squares[j].innerText === squares[j + 6].innerText) {
			declareWinner();
			return true;
		}
	}

	if (square[0].innerText && squares[0].innerText === squares[4].innerText && squares[0].innerText === squares[8].innerText) {
		declareWinner();
		return true;
	}
	if (square[3].innerText && squares[3].innerText === squares[4].innerText && squares[j].innerText === squares[6].innerText) {
		declareWinner();
		return true;
	}

	
}
