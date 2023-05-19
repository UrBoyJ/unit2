const timmy = { //This object is for timmy and lists all of his medical information
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
}

const sarah = { //This object is for sarah and lists all of his medical information
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

const rocky = { //This object is for rocky and lists all of his medical information
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}

//If a customer has a subscription, the customer will receive a 25% discount after the refill total has been calculated.
//If the customer has a coupon, the customer will receive a $10 discount after the subscription discount has been calculated.
function calculateTotalCost(customer) {
    const refillTotal = customer.pricePerRefill * customer.refills;
    let totalCost = refillTotal;
  
    if (customer.subscription) {
      const subscriptionDiscount = refillTotal * 0.25;
      totalCost -= subscriptionDiscount;
    }
  
    if (customer.coupon) {
      totalCost -= 10;
    }
  
    return totalCost;
  }
  
  // Calculate total cost for each customer
  const timmyTotal = calculateTotalCost(timmy);
  const sarahTotal = calculateTotalCost(sarah);
  const rockyTotal = calculateTotalCost(rocky);
  
  // Log the final amount for each customer
  console.log(`Timmy's grand total is $${timmyTotal}.`);
  console.log(`Sarah's grand total is $${sarahTotal}.`);
  console.log(`Rocky's grand total is $${rockyTotal}.`);