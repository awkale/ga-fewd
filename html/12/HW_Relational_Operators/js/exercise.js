/**
 * Javascript Exercise: Relational Operators
 * Most of your answers should be stored in variables called q1, q2 etc..
 */

/**
 * Question 1
 * Show that the variable 'ten' is less than the variable 'twenty'.
 * Store the results in q1;
 */
var ten = 10;
var twenty = 20;
var q1;
if (ten < twenty) {
	q1 = true;
}
else {
	q1 = false;
}


/**
 * Question 2
 * In addition to numbers, relational operators also work for characters.
 * Show that 'Z' is greater than 'A'.
 * Store the result of the check in q2;
 */
var a = 'A';
var z = 'Z';
var q2;
if (a < z) {
	q2 = true;
} else {
	q2 = false;
}

/**
 * Question 3
 * Is 'a' less than 'A'?
 * Store the result in q3;
 */
var lowerCaseA = 'a';
var upperCaseA = 'A';
var q3;
if (lowerCaseA < upperCaseA) {
	q3 = true;
} else {
	q3 = false;
}

/**
 * Question 4
 * Show that the driver is driving within the legal speed limits
 * Store the check in q4
 */
var legalMinimumSpeed = 40;
var legalMaximumSpeed = 70;
var driverSpeed = 70;
var q4;
if (driverSpeed >= legalMinimumSpeed && driverSpeed <= legalMaximumSpeed) {
	q4 = true;
} else {
	q4 = false;
}

/**
 * Question 5
 * Show that the driver is not driving within the legal speed limits
 * Store the check in q5
 */
var newDriverSpeed = 39;
var q5;
if (newDriverSpeed >= legalMinimumSpeed && newDriverSpeed <= legalMaximumSpeed) {
	q5 = true;
} else {
	q5 = false;
}
