// store board feet as aglobal variable for both functions
var boardFeet = 0;
// function for calculating board feet
function calcBoardFeet () {
	var widthIsInt = false;
	var heightIsInt = false;
	var thicknessIsInt = false;
	// get values from fields and convert to integer
	var width = parseInt(document.getElementById("widthInput").value);
	var height = parseInt(document.getElementById("heightInput").value);
	var thickness = parseInt(document.getElementById("thicknessInput").value);
	// Catch input that is not a number
	try {
		widthIsInt = Number.isInteger(width); // check if width is integer
		heightIsInt = Number.isInteger(height); // check if height is integer
		thicknessIsInt = Number.isInteger(thickness); // check if thickness is integer
		// if all are ints calculate and return board feet to global variable
		if (widthIsInt && heightIsInt && thicknessIsInt){
			boardFeet = (width * height * thickness) / 144;
			document.getElementById("totalBoardFeet").innerHTML = "Your total board feet are " + boardFeet;
			return boardFeet;
		} else {
			throw "Please enter only numbers in the fields";
		}
	} // set inputs of non integer inputs back to empty and display error message
	catch(message) {
		document.getElementById("widthInput").value = "";
		document.getElementById("heightInput").value = "";
		document.getElementById("thicknessInput").value = "";
		document.getElementById("totalBoardFeet").innerHTML = message;
	}
		}
// pull the board feet calculation from calcBoardFeet and multiply it by wood price
function priceTimesBoardFeet () {
	var boardPrice = 0;
	if (document.getElementById("walnutButt").checked) {
		boardPrice = boardFeet * 12;
	} else if (document.getElementById("pineButt").checked) {
		boardPrice = boardFeet * 5;
	} else if (document.getElementById("ashButt").checked){
		boardPrice = boardFeet * 7;
	} else if (document.getElementById("oakButt").checked){
		boardPrice = boardFeet * 9;
	}
document.getElementById("priceDisplay").innerHTML = "The estimated cost of your project is $" + boardPrice;
}
// backwards compatible button for board feet form
var submitButton = document.getElementById("submitButton");
if (submitButton.addEventListener) {
 submitButton.addEventListener("click", calcBoardFeet, false);
} else if (submitButton.attachEvent) {
 submitbutton.attachEvent("onClick", calcBoardFeet);
}
// backwards compatible button for price form
var priceButton = document.getElementById("priceButton");
if (priceButton.addEventListener) {
 priceButton.addEventListener("click", priceTimesBoardFeet, false);
} else if (priceButton.attachEvent) {
 priceButton.attachEvent("onClick", priceTimesBoardFeet);
}

