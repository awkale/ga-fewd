$(function(){


var balance = 1000;
var transaction = prompt("What type of transaction would you like to do?", "enter transction type");
var amount = prompt("Enter amount", "amount");
amount = parseInt(amount);
if (transaction == "deposit") {
	console.log(balance + amount);
} else if (transaction == "withdrawl") {
	console.log(balance - amount);
}


});
