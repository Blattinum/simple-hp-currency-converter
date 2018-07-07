/*					GNU GENERAL PUBLIC LICENSE
					  Version 3, 29 June 2007
*/

var usrGalleonsDollarValue = document.getElementById("lblGalleons");
var usrSicklesDollarValue = document.getElementById("lblSickles");
var usrKnutsDollarValue = document.getElementById("lblKnuts");
var usrDollars;

if(document.getElementById("reddit_Method").checked) {
	usrGalleonsDollarValue *= 25;
	usrSicklesDollarValue *= 1.50;
	usrKnutsDollarValue *= 0.05;
	usrDollars = usrGalleonsDollarValue + usrSicklesDollarValue + usrKnutsDollarValue; 
}else if(document.getElementById("wikia_Method").checked) {
	usrGalleonsDollarValue *= 7.35;
	usrSicklesDollarValue *= 0.46;
	usrKnutsDollarValue *= 0.02;
	usrDollars = usrGalleonsDollarValue + usrSicklesDollarValue + usrKnutsDollarValue;
}
document.getElementById("btnCalc").addEventListener("click", function(){
    document.getElementById("lblResult").innerHTML = "Hello World";
});
