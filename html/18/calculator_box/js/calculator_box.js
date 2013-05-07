/*Javascript: Advanced Functions

This example is a little more advanced.

-	First re-create the .png image using HTML code.
-	Your css will handle highlighting the boxes when the user hovers over them.

Each box represents a value to be added/subtracted.
Your JS file should accomplish the following:
-	The zero box in the center is a running total. It will update with the current total every time the user clicks a box.
(i.e The box in the middle indicates zero, I click the +30 box and the zero update to 30. I then click the 10 box and it updates t0 40).

For an extra bonus, use the Red and Blue boxes to update the background color.

Hint: Research the .click(), .text() in jQuery documentation
*/

//Here is some code to get you started:

var total = 0;

$(function(){
	$('#a10').click(a10);
	$('#a20').click(a20);
	$('#a30').click(a30);
	$('#red').click(red);
	$('#blue').click(blue);
	$('#n10').click(n10);
	$('#n20').click(n20);
	$('#n30').click(n30);
});


function a10(){
	total += 10;
	$("#out").text(total);
}
function a20(){
	total += 20;
	$("#out").text(total);
}
function a30(){
	total += 30;
	$("#out").text(total);
}
function red() {
	$("#out").toggleClass('red');
}
function blue(){
	$("#out").toggleClass('blue');
}
function n10(){
	total -= 10;
	$("#out").text(total);
}
function n20(){
	total -= 20;
	$("#out").text(total);
}
function n30(){
	total -= 30;
	$("#out").text(total);
}
