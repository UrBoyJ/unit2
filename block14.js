// Create a JavaScript code that accepts an array of numbers and returns a new array
// with only the odd numbers from the original array.
// If there is only one odd number in the array, return an array with that single value.

function onlyOdds(arr) {
  const oddDuck = []; //need to define an empty array that will hold odd numbers
  for (let i = 0; i < arr.length; i++) {
    //declare i (which is also index) equal to 0 to start at the beginning of the array,
    //then set the condition for how long it will loop for,
    // and then tell the loop what to do after it has reached the end.
    if (arr[i] % 2) {
      oddDuck.push(arr[i]);
    }
  }
  return oddDuck;
}
// console.log (onlyOdds([2, 4, 6, 8, 11, 12, 20, 15, 22]))
// console.log (onlyOdds([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
// console.log (onlyOdds([70, 42, 55, 81, 21, 91, 34]))
// console.log (onlyOdds([2, 4, 6, 8, 10, 11, 12]))

// -------------------------------------------------------------------------- Part 2

// Create a JavaScript code that accepts a string of lowercase letters.
// Print the word followed by how many consonants and vowels it has.

function myVowels(str) {
  const vowels = "a, e, i, o, u".split(", "); //defined vowels as a string
  //used split to allow the ", " to be removed when checking vowels
  let vowelCount = 0;
  let constCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      //this will go through the array and match the string
      vowelCount++; //count calculator for vowels found
    } else {
      constCount++; //count calculator for anything else found
    }
  }
  return `${str} has ${constCount} consonants and ${vowelCount} vowels`;
}

// console.log (myVowels("hello"))
// console.log (myVowels("ukelele"))
// console.log (myVowels("awesome"))
// console.log (myVowels("onomatopoeia"))
// console.log (myVowels("textbook"))

// -------------------------------------------------------------------------- Part 3
//With a for loop, create a JavaScript code that creates a new array in reverse order.

function myReverse(arr) {
  const myCount = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    myCount.push(arr[i]);
  }
  return myCount;
}

// console.log(myReverse([1, 2, 3]))
// console.log(myReverse([1, 3, 5, 7, 9, 11]))
// console.log(myReverse([20, 50, 30, 60, 200]))
// console.log(myReverse([1, -1, 2, -3, 5, -8, 13]))

// -------------------------------------------------------------------------- Part 4
// Create a JavaScript code that prints each number from 1 to 100 on a new line.

// For each multiple of 3, print "Fizz" instead of the number.

// For each multiple of 5, print "Buzz" instead of the number.

// For numbers that are multiples of both 3 and 5, print "FizzBuzz"
//instead of the number.

function myFizz() {
  const myHundred = 0;
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0){
        console.log("Buzz");
    } else {
        console.log(i)
    }    
  }
}
myFizz()