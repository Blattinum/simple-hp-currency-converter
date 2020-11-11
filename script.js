/*					GNU GENERAL PUBLIC LICENSE
					  Version 3, 29 June 2007
*/

var usrGalleonsDollarValue = document.getElementById('lblGalleons').value;
var usrSicklesDollarValue = document.getElementById('lblSickles').value;
var usrKnutsDollarValue = document.getElementById('lblKnuts').value;
var usrDollars;

document.getElementById("btnCalc").addEventListener("click", ConversionCalc); /*{
    document.getElementById("lblResult").innerHTML = "Hello World";
}); */

function ConversionCalc() {
	if (document.getElementById("reddit_Method").checked) {
		usrGalleonsDollarValue *= 25;
		usrSicklesDollarValue *= 1.50;
		usrKnutsDollarValue *= 0.05;
		usrDollars = usrGalleonsDollarValue + usrSicklesDollarValue + usrKnutsDollarValue;
	} else if (document.getElementById("wikia_Method").checked) {
		usrGalleonsDollarValue *= 7.35;
		usrSicklesDollarValue *= 0.46;
		usrKnutsDollarValue *= 0.02;
		usrDollars = usrGalleonsDollarValue + usrSicklesDollarValue + usrKnutsDollarValue;
	}
	return usrDollars;
}

document.getElementById("lblResult").innerHTML = usrDollars;
