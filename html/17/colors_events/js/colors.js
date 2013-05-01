var selected_color = null;

$(function(){

	$('#add').click(add_colors);
	$('#colors').on('hover', '.color', change_bg); // "on" event instead of click (lets us select things that isn't already in the dom via js; when we hover over .color class runs change_bg
	$('#colors').on('click', '.color', toggle_selected_color);
	$('#colors').on('dblclick', '.color', delete_color);
});

function add_colors(){
	var colors = $('#colors_string').val();   //grab value of #color_string
	colors = colors.split(', '); // splitting it up in to an array

	for(var i = 0; i < colors.length; i++){  //array incrementing
		var color = $('<div>');
		color.addClass('color');   //adding class .color
		color.css('background-color', colors[i]);
		$('#colors').append(color); //adding color to id
	}
}

function change_bg(){
	var color = $(this).css('background-color');  // 'this' selects the item they are hovering over instead of writing an specific ID
	console.log('Hovering over ' + color);
	$('#colors_string').css('background-color', color);
}

function toggle_selected_color(){

	if(selected_color != this) {
		$(selected_color).removeClass('selected');
		selected_color = this;
		$(selected_color).addClass('selected');
	}

	else {
		$(selected_color).removeClass('selected');
		selected_color = null;
	}
}

function delete_color(){
	$(this).remove();
}