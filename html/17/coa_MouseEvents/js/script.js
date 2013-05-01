/**
 * Welcome to Mouse Events Exercise
 * A couple of thing we want to do:
 *
 * 1) When a user clicks the mousebox, turn it red by adding the "clicked" css class
 *    to it. When the user clicks it again, remove the "clicked" class and turn it blue
 *    again.
 *
 * 2) Use the mouseMove event to show the current position of the mouse using the HTML snippet provided
 */

$(function(){

	$('#mouseBox').click(function(event){
		$('#mouseBox').toggleClass('clicked');
	});

	$(document).mousemove(function(event){
		var x = event.pageX;
		var y = event.pageY;
		$('#xLocation').text(x);
		$('#yLocation').text(y);
	});
});