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





