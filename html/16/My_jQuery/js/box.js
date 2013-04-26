/*
	Only add code to this file.
*/


$(function(){
	var domchange;
	do {
	 	domchange = prompt("Do you want to change the DOM, (Y)es or (N)o", "(Y) or (N)");
	 	if (domchange == 'Y') {
			$('.box').hide(5000);
			$('.box2').show(2000);
			$('.box2').css('background', 'blue');
		} else if (domchange == "N") {
		alert("I have nothing to do!");
		}
	} while ( domchange !=="Y" && domchange !=="N");


});