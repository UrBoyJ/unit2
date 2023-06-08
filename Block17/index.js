//Connect the coffee_data.js file to the index.js file.
let coffeeMenu = require("./block17") //this allows the data to be pulled from the block17.js file.

//console.log(coffeeMenu) //this will print everything when you console.log in terminal.
let coffeeArray = []; 
//declaring empty array because variable will change

//2. Print an array of all the drinks on the menu.
function printDrinks() {
    return coffeeArray = coffeeMenu.map((drink)=>drink.name)
}

//console.log(printDrinks())

//3. Print an array of drinks that cost 5 and under.
function printPrice() {
    return coffeeArray = coffeeMenu.filter((x)=>x.price < 6)
}

//console.log(printPrice())

//4. Print an array of drinks that are priced at an even number.
function printEven() {
    return coffeeArray = coffeeMenu.filter((x)=>x.price % 2 === 0)
}

//console.log(printEven())

//5. Print the total if you were to order one of every drink.
function printTotal() {
    let sum = 0;
    // coffeeMenu.forEach((drink)=>{return sum += drink.price})
    // return sum

    coffeeMenu.reduce(x, price) => x + price, sum
}

console.log(`The total price for one of each drink is: $${printTotal}`);