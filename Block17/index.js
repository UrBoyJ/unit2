let coffeeMenu = require("./block17") //this allows the data to be pulled from the block17.js file.

//console.log(coffeeMenu) //this will print everything when you console.log in terminal.
let coffeeArray = []; 
//declaring empty array because variable will change

function printDrinks() {
    return coffeeArray = coffeeMenu.map((drink)=>drink.name)
}

//console.log(printDrinks())

function printPrice() {
    return coffeeArray = coffeeMenu.filter((x)=>x.price < 6)
}

//console.log(printPrice())

function printEven() {
    return coffeeArray = coffeeMenu.filter((x)=>x.price % 2 === 0)
}

//console.log(printEven())

function printTotal() {
    let sum = 0;
    // coffeeMenu.forEach((drink)=>{return sum += drink.price})
    // return sum

    coffeeMenu.reduce(x, price) => x + price, sum
}

console.log(`The total price for one of each drink is: $${printTotal}`);