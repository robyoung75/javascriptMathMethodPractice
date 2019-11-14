//math round method
var num = 1.3;
//console.log(Math.round(num)); //logs 1 rounds to nearest number

//math round floor method
var num = 6.9;
//console.log(Math.floor(num)); //logs 6, rounds to lowest whole number

//math round ceiling method
var num = 6.1;
//console.log(Math.ceil(num)); // logs 7, rounds to highest whole number



//random number generator for numbers 1 - 10
var bigDecimal = Math.random();
//console.log(bigDecimal); //logs a random number to 16 decimal places, 16 places is default
var improvedNum = (bigDecimal * 10) + 1;
//console.log(improvedNum); //logs coverts number to 0.0000000000000000 and 9.9999999999999999 and then adds 1 for 1.0000000000000000 to 10.9999999999999999
var wholeRandomNum = Math.floor(improvedNum); //logs a round number of 1 through 10.
console.log(wholeRandomNum); //returns a random whole number between 1 and 10

//parseInt and parseFloat example.

//parseInt converts a string like "12.8" to 12. parseInt drops the decimal, no rounding.
//if two numbers are included in a string all math operators accept + will result in the strings being converted to numbers.
//a + symbol will require parseInt or parseFloat or you will get a concatenated string.

var num = "12.69"
var newNum = parseInt(num);
console.log(newNum); //logs 12

//parseFloat converts a string like "12.8" to 12.8. parseFloat keeps the decimals.

var num = "12.69"
var newNum = parseFloat(num);
console.log(newNum); //logs 12.69

//a + symbol will require parseInt or parseFloat or you will get a concatenated string.
var currentAge = "44";
var qualifyingAge = currentAge + 1;
console.log(qualifyingAge); //logs 441

var currentAge = "44";
var qualifyingAge = parseInt(currentAge) + 1;
console.log(qualifyingAge); //logs 45








