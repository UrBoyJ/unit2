const customer = { //here I am declaring the object customer and defining all of the properties within this object.
    firstName:"jake",
    lastName:"smith",
    email:"jaekSmih!aol.com",
    phone:"undefined",
    zipCode:"631",
    favoriteFlavors:32,
    cupSize:"medium",
    favoriteStore:"Target",
    firstVisit:false,
};

//console.log(customer)

//below is information that was found incorrect and needs to be changed
customer["email"] = "Jak3Smith1992@email.com";
customer["phone"] = 3195551234;
customer["zipCode"] = "63132";
customer["favoriteFlavors"] = ["coffee", "strawberry", "matcha"];

//console.log(customer)

//the management team has decided to remove a couple of items from the list
delete customer["zipCode"]
delete customer["favoriteStore"]

//console.log(customer)

//The management team also wants to add the following items to the survey
customer.toppings = "chocolate sprinkles", "wafer straws", "gummy bears";
customer.futureFlavors = "mango";
customer.todaysPurchaseCost = 5.32;

//console.log(customer)

//The last step is to print the keys in an array
console.log(Object.values(customer))