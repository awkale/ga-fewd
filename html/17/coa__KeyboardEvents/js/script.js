/**
 * Welcome to Keyboard Events Exercise
 * A couple of thing we want to do:
 *
 * 1) First, let's display the most recent keyCode the user pressed. This will help you do the second
 *    exercise.
 *
 * 2) Now, let's change the behavior of the "noVowels" textbox so that no vowels can
 *    be typed in it.
 *    Hint, remeber what event.preventDefault() does?
 */

$(function(){

	$(document).keypress(function(event){
		var key = event.which;
		$('#justPressed').text(key);
	});

	$('#noVowels').keypress(function(event){
		var key = event.which;
		if(key == 97 || key == 101 || key == 105 || key == 111 || key == 107){
			event.preventDefault();
		}
	});

});