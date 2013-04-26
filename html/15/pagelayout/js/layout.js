$(document).ready(function() {

var name = prompt("Please Enter Name", 'Name');
$('h1').html('Welcome ' + name);


console.log(
$('h2').html()
);

$('h2').append(" don't belong in the head");

console.log(
$('h2').html()
);
console.log(
$('h3').html()
);

/* or like this for two tags, but need to use .text instead of html
$('h2, h3').text()
*/

});