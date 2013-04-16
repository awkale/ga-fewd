$(


  function(event) {
  	//Start to type below here. Make sure not to delete any "{}" braces.
  	var fav_color = prompt("What is your favorite color", "enter favorite color");

  	if(fav_color == "blue" || fav_color == "red" || fav_color == "yellow" || fav_color == "green") {
  	$("body").css("background-color", fav_color);
  	}
  	else {
	  	$("body").css("background-color", "white");
	  	$("h2").html("That color is not available");
  	}
}
);

