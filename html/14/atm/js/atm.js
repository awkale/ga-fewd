var balance = 1000;



function withdrawl (minus){
	balance = balance - minus;
	console.log("You withdrew " + minus + "and the remaining balance is " + balance);

}

function deposit (add) {
	balance = balance + add;
	console.log("You deposited " + add + "and the current balance is " + balance);
}





$(function(){


var transaction = prompt("What type of transaction would you like to do?", "enter transction type");
var amount = prompt("Enter amount", "amount");
amount = parseInt(amount);
if (transaction == "deposit") {
	deposit (amount);
} else if (transaction == "withdrawl") {

	withdrawl (amount);
}


});
