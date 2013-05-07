$(document).ready(function(){

	//CREATE OBJECT (using Literal Notation)

		var user = {
			name:"",
			age:"",
			phone:"",
			email:""
		};
/* 		var usernameinput = */
	//DOM SEL VARS
	var user_name_input = $('#user_name'),
		user_age_input = $('#user_age'),
		user_phone_input = $('#user_ph'),
		user_email_input = $('#user_email'),
		user_name_error = $('#user_name_error'),
		user_age_error = $('#user_age_error'),
		user_phone_error = $('#user_ph_error'),
		user_email_error = $('#user_email_error'),
		add_user_data_form = $('#add_user_data'),
		display_data = $('#display_data');



	//INITIALLY HIDE ERRORS
	$('span').hide();

	//DISPLAY LIST FUNCTION
	function display(){
	display_data.html('');
	$.each(user, function(prop,value){
		display_data.append('<li>' + prop + ':' + value + '</li>')
	});
	}
	//ADD_USER FORM SUBMIT EVENT FUNCTION

	adduserdataform.submit(function(){
		var user_name_val = user_name_input.val();
		var user_age_val = user_age_input.val();
		var user_phone_val = user_phone_input.val();
		var user_email_val = user_email_input.val();
	});

	///^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/

	//CLEAR BUTTON FUNCTION


});