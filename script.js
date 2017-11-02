/*					GNU GENERAL PUBLIC LICENSE
					  Version 3, 29 June 2007
*/

var galleonsDollarValue, sicklesDollarValue, knutsDollarValue;

if(document.getElementById("reddit_Method").checked) {
	galleonsDollarValue = 25;
	sicklesDollarValue = 1.50;
	knutsDollarValue = 0.05;
}else if(document.getElementById("wikia_Method").checked) {
	galleonsDollarValue = 7.35;
	sicklesDollarValue = 0.46;
	knutsDollarValue = 0.02;
}
document.getElementById("btnCalc").addEventListener("click", function(){
    document.getElementById("lblResult").innerHTML = "Hello World";
});


