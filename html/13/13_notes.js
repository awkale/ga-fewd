# Javascript
$(document).ready(function() {

});
/* waits for the page to load before activating js; used for inline */

$()
/* same as above but in external */



<h1>GA Is The Best</h1>
<p>Hello</p>

$("p").html("goodbye"); // ("p") is the selector; .html replaces html element with ("goodbye")

$("h1").css("color","blue"); // selects h1, add css style "color:blue"


jquery examples
$(document).ready(function(){});
$("#demo").html();
$("h2").html();


// !-OUTPUT TO THE CONSOLE
console.log("Hello World");

// !INPUT FROM USERS
prompt('What is your first name?');

// !Arithmetic in javascript - BOMDAS

// !conversion: string to number
var intString="4";
var intNumber=parseInt(intString);

// !conversion: number to string
var number=4;
number.toString();=> "4"
or
number + "";=> "4"

// !Operators
== 	equal to
=== exactly equal to (value and type)
!= 	is not equal
!== is not equal (neither value nor type)
> 	greater than
< 	less than
>= 	greater than or equal to
<= 	less than or equal to

// !Comparing multiple conditions
&&	and	(x < 10 && y > 1) is true
|| 	or	(x==5 || y==5) is false
!		not	!(x==y) is true




// !Arrays
//declaring an empty array using the Array constructor
var myArr = new Array();

//declaring an empty array using literal notation (preferred/easier)
var myArr = [];

//Arrays are filled with elements: i.e. myArr3 = [element, anotherElement];
//Elements can be strings, numbers, or boolean.
myArr = ['Hello', ,54.3, true];

//if you leave a blank spot in an array, it creates a blank shelf space (undefined) placeholder.

myArr = ['Hello',, 54.3, true];

//Array elements can be fetched by their index number (starts from 0) - prints as original data type
console.log(myArr[0]); //prints Hello
console.log(myArr[1]); //prints undefined
console.log(myArr[2]); //prints 54.3
console.log(myArr[3]); //prints true

//We can insert new values into any space in the array using the positions index.
myArr[1] = 'Stuff';

/* !Associative Arrays
associative arrays allow us to define the index as a string. We can use associative arrays as a "key definition" list. They are nice because it can be easier to remember a string than a number and also allow us to match things together (favoriteColor: orange, favoriteFood: BBQ) */

myArr = ['Hello',, 54.3, true];
//associative arrays allow us to define the index as a string

myArr['Greeting'] = myArr[0];
//Now we can refer to that specific position by using its association

console.log(myArr['Greeting']); prints Hello

//we can overwrite all the elements of an array simply by giving the array new values. or passing one array into another.

var fruits = ['Apples', 'Oranges', 'Pears', 'Bananas'];
myArr = fruits;
console.log(myArr); //prints Apples, Oranges, Pears, Bananas

myArr = ['Apples', 'Oranges', 'Pears', 'Bananas'];
//what if i would like to know how long my array is (how many elements)?

console.log(myArr.length); //prints 4

//to get the last elements index position i can subtract one (remember indexes start with zero instead of one).

var pos = myArr.length - 1;
console.log(myArr[pos]); //prints Bananas

+++++++++
myArr = ['Apples', 'Oranges', 'Pears', 'Bananas'];
//we can insert on to the end of an array simply by using the push method.

myArr.push('Strawberries'); //you can push multiple items onto the end by comma separating

console.log(myArr); //prints Apples, Oranges, Pears, Bananas, Strawberries

+++++
myArr = ['Apples', 'Oranges', 'Pears', 'Bananas', 'Strawberries'];

//you can pull the last element off the end using the pop method

myArr.pop();

console.log(myArr);
//prints Apples, Oranges, Pears, Bananas

myArr.splice(2, 0, 'Tiger'); //this goes to index position 2 and  after it removes 0 (none) and adds new value of 'Tiger'

console.log(myArr); //prints Apples, Oranges, Tiger, Pears, Bananas where previously was Apples, Oranges, Pears, Bananas. Tiger has been inserted after Oranges and the items that followed have been bumped for 1 index

https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array




/* Iterations
Loops allow us to traverse over data so we can get more than one piece of information at a time. We will literally iterate over each type of content until we are satisfied. we can use loops with arrays to print or modify all (or some) of the information inside an array. there are two main types of loops: "for" and "while" */

+++++++
//a for loop repeats until a specified condition evaluates to false -- amount of times
//SYNTAX: for ([initialExpression]; [condition]; [incrementExpression])
{statement}

var vegetables = ['Broccoli','Peas','Carrots'];
for (var i = 0; i < vegetables.length; i++) {
	console.log(vegetables[i]);
}

//prints Broccoli, Peas, Carrots

+++++++
//a while statement executes its statement as long as a specified condition elvaluates to true

//SYNTAX: do {statment} while (condition);

var cars = ['Corvette','Mustang',' Porsche'];
var i = 0;

do {
		console.log(cars[i]);
i += 1;
}
while (i < cars.length);
//prints Corvette, Mustang, Porsche

+++++
//SYNTAX while (condition){statement}

var fish = ['Snapper', 'Tuna', 'Salmon'];
var i = 0;

while (i < fish.length) {
		console.log(fish[i]);
		i += 1;
}

//prints Snapper, Tuna, Salmons