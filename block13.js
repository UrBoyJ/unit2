function isTruthy (value){

if (value) {
  console.log(true);
} else if (value === false) {
  console.log("The boolean value false is falsy");
} else if (value === null) {
  console.log("The null value is falsy");
} else if (value === undefined) {
  console.log("undefined is falsy");
} else if (value === 0) {
  console.log("The number 0 is falsy (the only falsy number)");
} else if (value === "") {
  console.log("The empty string is falsy (the only falsy string)");
}}
// isTruthy("This is Pizza")
// isTruthy(null)
// isTruthy()

// -------------------------------------------------------------------------- Part 2

// Define the variable that takes the sum of 2 variables and prints the corresponding result
//List of num1 variables are 50, 99, 0, 500, -1000 and -5
//List of num2 variables are 51, -2, 101, -500, 0 and 0
function numCheck (num1, num2){ 
let sum = num1 + num2;

// Sum of num1 and num2 will go through if parameters to console log the correct statement
if (sum < -1000) {
console.log(sum + " is less than -1000");
} else if (sum < 0) {
console.log(sum + " is a negative number");
} else if (sum === 0) {
console.log(sum + " is equal to 0");
} else if (sum > 0 && sum <= 100) {
console.log(sum + " is larger than 0");
} else {
console.log(sum + " is greater than 100"); 
}}

// numCheck(50, 51)
// numCheck(99, -2)
// numCheck(0, 101)
// numCheck(500, -500)
// numCheck(0, -1000)
// numCheck(0, -5)

// -------------------------------------------------------------------------- Part 3
//Using if/else statements, 
//JavaScript code in a script tag that prints true if both parameters are greater or equal to 5.
function greaterThan(num1, num2){

if (num1 >= 5 && num2 >= 5) {
console.log(true);
} else {
console.log(false);
}}

// greaterThan(5, 6)
// greaterThan(10, 11)
// greaterThan(0, 0)
// greaterThan(1000, -1000)
// greaterThan(6, 4)
// greaterThan(5, 5)

// -------------------------------------------------------------------------- Part 4
//Using if/else statements and strict equality operators, 
//JavaScript code in a script tag that compares two sets of two values. 
//Print true if at least one of the pairs is truthy.
function param(param1A, param1B, param2A, param2B){

if ((param1A === param1B || param2A === param2B)) {
console.log(true);
} else {
console.log(false);
}}

param("cat", "cat", 6, "6")
param("five", 5, "dog", "dawg")
param(0, false, "horse", "horse")
param("eight", "eight", "ate", "ate")
param(11, "eleven", "four", "for")
param("cake", "cake", "pie", "pie")