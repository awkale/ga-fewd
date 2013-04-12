$(function(){

	// this is a single line comment
	/*
	 * this is a multi-line comment
	 */

	 //Prompt the user for their name and last name.
	 var first = prompt('What is your first name?');
	 var last = prompt('What is your last name?', 'Last Name');

	//Create a new variable called full name and store the users full name.
	var fullname = first + ' ' + last;

	//Print the full name to the console.
	console.log('Your full Name ' + fullname);

	//Prompt the user for their age.
	var age = prompt('What is your age?', 'enter age');


	//Add 10 to the age and print the output to the console.
	age = parseInt(age);
	console.log('Your real age is ' + (age + 10));


	//Verify that the user is over 18 and print if they are a minor or adult to the console.

	if(age < 18){
		console.log('You are a minor. No lotto ticket for you');
	}
	else{
		console.log('You are an adult.');
	}




	//Verify if the first name is "General" and the last name is NOT "Assembly"

	if((first == 'general') && (last != 'assembly')){
		console.log('you are the winner');
	}


});
